"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "../f168.module.css";
import { AlertTriangle } from "lucide-react";

export type CaptchaStep = "captcha" | "review";

type Props = {
  open: boolean;
  step: CaptchaStep;
  onClose: () => void;

  // Step 1 (captcha)
  captchaUrl?: string | null;
  note?: string | null;
  busy?: boolean;
  onContinue?: (captchaCode: string) => Promise<void>;

  // Step 2 (review + confirm)
  detail?: {
    promo_code: string;
    point: number;
    time: string;
    min_point: number;
    max_point: number;
  } | null;
  account?: string;
  onAccountChange?: (v: string) => void;
  submitBusy?: boolean;
  submitMsg?: string | null;
  onSubmit?: () => Promise<void>;
};

export default function CaptchaModal({
  open,
  step,
  onClose,
  // Captcha
  captchaUrl,
  note,
  busy,
  onContinue,
  // Review
  detail,
  account,
  onAccountChange,
  submitBusy,
  submitMsg,
  onSubmit,
}: Props) {
  const codeRef = useRef<HTMLInputElement>(null);
  const [captchaCode, setCaptchaCode] = useState("");

  // lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // autofocus when entering captcha step
  useEffect(() => {
    if (open && step === "captcha") {
      const t = setTimeout(() => codeRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open, step]);

  // reset field when modal closes or a new captcha arrives
  useEffect(() => {
    if (!open) setCaptchaCode("");
  }, [open, captchaUrl]);

  if (!open) return null;

  const CaptchaStepUI = (
    <>
      <div className={styles.captchaBox}>
        {captchaUrl ? (
          <img src={captchaUrl} alt="แคปชา" className={styles.captchaImg} />
        ) : (
          <div className={styles.captchaPlaceholder}>กำลังโหลด...</div>
        )}
      </div>

      <input
        ref={codeRef}
        type="text"
        placeholder="กรอกโค้ดแคปชา"
        className={styles.captinput}
        aria-label="รหัสแคปชา"
        value={captchaCode}
        onChange={(e) => setCaptchaCode(e.target.value)}
        onKeyDown={async (e) => {
          if (e.key === "Enter") {
            const v = captchaCode.trim();
            if (v && onContinue) await onContinue(v);
          }
        }}
      />
      {note ? (
        <div className={`flex items-center gap-2 ${styles.note} `} role="alert" aria-live="polite">
          <AlertTriangle aria-hidden />
          <span>{note}</span>
        </div>
      ) : null}

      <button
        className={styles.continueBtn}
        onClick={async () => {
          const v = captchaCode.trim();
          if (v && onContinue) await onContinue(v);
        }}
        disabled={busy || !captchaCode.trim()}
      >
        {busy ? "กำลังประมวลผล..." : "ดำเนินการต่อ"}
      </button>
    </>
  );

  const ReviewStepUI = (
    <>
      {detail && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>รหัสโปรโมชัน</th>
              <th>คะแนน</th>
              <th>เวลาสิ้นสุด</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{detail.promo_code}</td>
              {((detail?.min_point ?? 0) !== 0 || (detail?.max_point ?? 0) !== 0)
                ? <td style={{color: "green", fontWeight: "bold"}}> {/*detail!.min_point} - {detail!.max_point*/}  ยินดีด้วยลุ้นต่อไป</td>
                : <td className={styles.captpoint}> ยินดีด้วยลุ้นต่อไป </td>}
              <td>{detail.time.replace("T", " ").slice(0, 16)}</td>
            </tr>
          </tbody>
        </table>
      )}

      <input
        type="text"
        placeholder="กรอกบัญชีของคุณ"
        className={styles.captinput}
        aria-label="บัญชี"
        value={account ?? ""}
        onChange={(e) => onAccountChange?.(e.target.value)}
      />

      {submitMsg ? (
        <div className={styles.note} role="alert" aria-live="polite">
          <AlertTriangle aria-hidden />
          <span>{submitMsg}</span>
        </div>
      ) : null}

      <button
        className={styles.continueBtn}
        onClick={onSubmit}
        disabled={submitBusy || !account?.trim()}
      >
        {submitBusy ? "กำลังส่ง..." : "ยืนยันรับโปรโมชัน"}
      </button>
    </>
  );

  const body = (
    <div className={styles.captbackdrop} role="dialog" aria-modal="true">
      <div className={`${styles.captmodal} ${styles.modalChrome}`}>
        <div className={styles.captheader}>
          <h3 className={styles.captTitle}>
            {step === "captcha" ? "ยืนยันแคปชา" : "ยืนยันรับโปรโมชัน"}
          </h3>
          <button onClick={onClose} className={styles.closeBtn} aria-label="ปิด">
            ×
          </button>
        </div>

        <div className={styles.captbody}>
          {step === "captcha" ? CaptchaStepUI : ReviewStepUI}
        </div>
      </div>
    </div>
  );

  return createPortal(body, document.body);
}
