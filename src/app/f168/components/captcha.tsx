"use client";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "../f168.module.css";

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

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    // autofocus when you enter captcha step
    if (open && step === "captcha") {
      const t = setTimeout(() => codeRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open, step]);

  if (!open) return null;

  const CaptchaStepUI = (
    <>
      <div className={styles.captchaBox}>
        {captchaUrl ? (
          <img src={captchaUrl} alt="captcha" className={styles.captchaImg} />
        ) : (
          <div className={styles.captchaPlaceholder}>Loading...</div>
        )}
      </div>

      <input
        ref={codeRef}
        type="text"
        placeholder="Enter captcha here"
        className={styles.captinput}
        aria-label="Captcha code"
        onKeyDown={async (e) => {
          if (e.key === "Enter") {
            const v = (e.target as HTMLInputElement).value.trim();
            if (v && onContinue) await onContinue(v);
          }
        }}
        onChange={() => {}}
      />

      {note ? <div className={styles.note}>{note}</div> : null}

      <button
        className={styles.continueBtn}
        onClick={async () => {
          const v = codeRef.current?.value?.trim() ?? "";
          if (v && onContinue) await onContinue(v);
        }}
        disabled={busy}
      >
        {busy ? "Processing..." : "Continue"}
      </button>
    </>
  );

  const ReviewStepUI = (
    <>
      {detail && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Promo</th>
              <th>Point</th>
              <th>Range</th>
              <th>End Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{detail.promo_code}</td>
              <td>{detail.point}</td>
              <td>{detail.min_point} - {detail.max_point}</td>
              <td>{detail.time.replace("T", " ").slice(0, 16)}</td>
            </tr>
          </tbody>
        </table>
      )}

      <input
        type="text"
        placeholder="Enter your account"
        className={styles.captinput}
        aria-label="Account"
        value={account ?? ""}
        onChange={(e) => onAccountChange?.(e.target.value)}
      />

      {submitMsg ? <div className={styles.note}>{submitMsg}</div> : null}

      <button
        className={styles.continueBtn}
        onClick={onSubmit}
        disabled={submitBusy || !account?.trim()}
      >
        {submitBusy ? "Submitting..." : "Confirm Promotion"}
      </button>
    </>
  );

  const body = (
    <div className={styles.captbackdrop} role="dialog" aria-modal="true">
      <div className={`${styles.captmodal} ${styles.modalChrome}`}>
        <div className={styles.captheader}>
          <h3 className={styles.captTitle}>
            {step === "captcha" ? "Captcha Verification" : "Confirm Promotion"}
          </h3>
          <button onClick={onClose} className={styles.closeBtn} aria-label="Close">×</button>
        </div>

        <div className={styles.captbody}>
          {step === "captcha" ? CaptchaStepUI : ReviewStepUI}
        </div>
      </div>
    </div>
  );

  return createPortal(body, document.body);
}
