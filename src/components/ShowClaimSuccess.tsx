'use client';

import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';
import fan3 from '../../public/images/fan3.png'

type Props = {
  points: number;
  soundUrl?: string;
  autoCloseMs?: number;
  onClose?: () => void;
};

export async function showClaimSuccess({
  points,
  soundUrl = '/sounds/confetti-pop.mp3',
  autoCloseMs = 5000,
  onClose,
}: Props) {
  const audio = soundUrl ? new Audio(soundUrl) : null;
  
  // Fire the modal
  await Swal.fire({
    imageUrl: '/images/fan3.png',
    imageAlt: 'Success',
    imageHeight: 96,
    title: `
    <div style="display: flex; justify-content: center; align-items: center;">
      <p style="margin-top: 10px;">
        Congrtulations 
      </p>
    </div>
    `,
    html: `
    <div style="text-align: center;  position: relative;">
        <div id="confetti-placeholder" style="position: relative; margin-bottom: 20px;"></div>
        <h3 style="font-weight: bold; margin-top: 20px;">ขอแสดงความยินดี</h3>
        <p style="margin-top: 10px;">
          คุณได้รับ 
          <span style="color: #28a745; font-weight: bold;">${points} คะแนนสำเร็จ</span>
        </p>
      </div>
    `,
    background: '#0b0b0da1',
    color: '#fff',
    width: 420,
    padding: '1.25rem',
    showConfirmButton: true,
    confirmButtonText: 'Great!',
    confirmButtonColor: '#12c2e9',
    allowOutsideClick: false,
    allowEscapeKey: true,
    focusConfirm: true,

    timer: autoCloseMs,
    timerProgressBar: true,

    didOpen: () => {
      audio?.play().catch(() => {});
      const duration = 1800;
      const end = Date.now() + duration;

      const defaults = { startVelocity: 50, spread: 360, ticks: 260, zIndex: 10000 };
      const frame = () => {
        confetti({
          ...defaults,
          particleCount: 10,
          origin: { x: 0.15, y: 0.05 },
        });
        confetti({
          ...defaults,
          particleCount: 10,
          origin: { x: 0.85, y: 0.45 },
        });
        if (Date.now() < end) requestAnimationFrame(frame);
      };
      frame();
    },

    willClose: () => {
      // stop and reset sound
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    },
  }).then(() => {
    onClose?.();
  });
}
