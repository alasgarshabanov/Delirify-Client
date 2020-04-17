import {useState} from 'react';
  
 export default () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const handleSidebarOpen = () => {
        setSidebarOpen(true);
      };
    
      const handleSidebarClose = () => {
        setSidebarOpen(false);
      };
    

    const handleProfileMenuOpen = (ev, ref) => {
        setAnchorEl(ref.current);
    };
  
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleProfileMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (ev, ref) => {
        setMobileMoreAnchorEl(ref.current);
    };

    return [
        { anchorEl, mobileMoreAnchorEl, sidebarOpen},
        handleMobileMenuOpen, handleMobileMenuClose,
        handleProfileMenuOpen, handleProfileMenuClose,
        handleSidebarOpen, handleSidebarClose
    ];
 }