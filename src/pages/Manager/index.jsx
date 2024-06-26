import { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { FaCat } from "react-icons/fa";
import ReadCat from "../Manager/ReadCat";
import { MdDomain, MdCreateNewFolder } from "react-icons/md";
import { useAuth, useUserData } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";
import ReadCatProduct from "./ReadCatProduct";
import ReadDrink from "./ReadDrink";
import ReadStaff from "./ReadStaff";
import { BiSolidDrink } from "react-icons/bi";
import { BiSolidBaguette } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import { RiArrowGoBackFill } from "react-icons/ri";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Manager() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [menuData, setMenuData] = useState("Home");
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const userData = useUserData();
  const { loaded } = useAuth();

  useEffect(() => {
    if (loaded && (!userData || userData.roleName !== "Manager")) {
      navigate("/");
    }
  }, [loaded, navigate, userData]);

  const handleGOBack = () => {
    navigate("/");
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ backgroundColor: "#004b00" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => {
                setOpen(!open);
              }}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Manager
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem disablePadding onClick={() => setMenuData("ReadCat")}>
              <ListItemButton>
                <ListItemIcon>
                  <FaCat />
                </ListItemIcon>
                <ListItemText primary="Mèo" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding onClick={() => setMenuData("ReadDrink")}>
              <ListItemButton>
                <ListItemIcon>
                  <BiSolidDrink />
                </ListItemIcon>
                <ListItemText primary="Đồ uống" />
              </ListItemButton>
            </ListItem>

            <ListItem
              disablePadding
              onClick={() => setMenuData("ReadCatProduct")}
            >
              <ListItemButton>
                <ListItemIcon>
                  <BiSolidBaguette />
                </ListItemIcon>
                <ListItemText primary="Sản phẩm cho mèo" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding onClick={() => setMenuData("ReadStaff")}>
              <ListItemButton>
                <ListItemIcon>
                  <RxAvatar />
                </ListItemIcon>
                <ListItemText primary="Nhân viên" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={handleGOBack}>
                <ListItemIcon>
                  <RiArrowGoBackFill />
                </ListItemIcon>
                <ListItemText primary="Quay lại" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {menuData == "ReadCat" && <ReadCat />}
          {menuData == "ReadCatProduct" && <ReadCatProduct />}
          {menuData == "ReadDrink" && <ReadDrink />}
          {menuData == "ReadStaff" && <ReadStaff />}
        </Box>
      </Box>
    </>
  );
}
