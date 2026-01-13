// src/components/MaintenancePopup.tsx
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import BuildIcon from '@mui/icons-material/Build'; // ไอคอน Build จาก MUI
// หรือใช้ไอคอน Warning แทน
// import WarningIcon from '@mui/icons-material/Warning';

interface MaintenancePopupProps {
  show: boolean;
  onClose: () => void;
}

const MaintenancePopup: React.FC<MaintenancePopupProps> = ({ show, onClose }) => {
  return (
    <Dialog open={show} onClose={onClose}>
      <DialogTitle style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', color: '#f44336' }}>
        ขออภัยในความไม่สะดวก
      </DialogTitle>
      <DialogContent style={{ textAlign: 'center', padding: '20px' }}>
        {/* ใช้ไอคอน Build หรือ Warning จาก MUI */}
        <BuildIcon style={{ fontSize: '80px', color: '#f44336', marginBottom: '20px' }} />
        {/* หรือใช้ WarningIcon แทน */}
        {/* <WarningIcon style={{ fontSize: '80px', color: '#f44336', marginBottom: '20px' }} /> */}
        <p>ระบบอยู่ระหว่างการปรับปรุงชั่วคราว เราจะแจ้งให้คุณทราบเมื่อระบบกลับมาใช้งานได้ตามปกติ ขออภัยในความไม่สะดวก</p>
      </DialogContent>
      <DialogActions style={{ justifyContent: 'center' }}>
        <Button onClick={onClose} color="primary" style={{ backgroundColor: '#f44336', color: '#fff', borderRadius: '20px' }}>
          ปิด
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MaintenancePopup;