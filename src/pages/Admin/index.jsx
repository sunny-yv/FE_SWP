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
import CreateCoffeeShop from "../../components/CreateCoffeeShop";
import ReadCoffeeShop from "../../components/ReadCoffeeShop";
import ReadCat from "../Manager/ReadCat";
import Collapse from "@mui/material/Collapse";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { MdDomain, MdCreateNewFolder } from "react-icons/md";
import { useAuth, useUserData } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import TableCoffeeShop1 from "../Table/TableCoffeeShop1";
import TableCoffeeShop2 from "../Table/TableCoffeeShop2";
import TableCoffeeShop3 from "../Table/TableCoffeeShop3";
import TableCoffeeShop4 from "../Table/TableCoffeeShop4";
import TableCoffeeShop5 from "../Table/TableCoffeeShop5";
import Dashboard from "../Dashboard/Dashboard";
import { toast } from "react-toastify";
import { MdDashboard } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";
import ReadStaff from "./ReadStaff";
import { RxAvatar } from "react-icons/rx";
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

export default function Admin() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [menuData, setMenuData] = useState("Home");
  const [anchorEl, setAnchorEl] = useState(null);
  const [isPay, setIsPay] = useState(null);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const userData = useUserData();
  const { loaded } = useAuth();
  const getMessage = () => {
    // Lấy URL hiện tại
    var currentURL = window.location.href;

    var urlParts = currentURL.split("?");

    if (urlParts.length > 1) {
      var queryString = urlParts[1];

      var queryParams = queryString.split("&");

      for (var i = 0; i < queryParams.length; i++) {
        var param = queryParams[i].split("=");
        if (param[0] === "message") {
          var messageValue = decodeURIComponent(param[1]);
          if (messageValue === "true") {
            localStorage.removeItem("cart");
            toast.success("Thanh toán thành công");
            setIsPay(true);
            setTimeout(() => {
              navigate("/admin");
              window.location.reload();
              setMenuData("MenuStaff");
            }, 3000);
            return true;
          } else {
            toast.error("Thanh toán thất bại");
            setIsPay(false);
            setTimeout(() => {
              navigate("/admin");
              window.location.reload();
              setMenuData("MenuStaff");
            }, 3000);
            return false;
          }
        }
      }
    } else {
      setIsPay(null);
      setTimeout(() => {
        navigate("/admin");
      }, 3000);
      return null;
    }
  };
  useEffect(() => {
    if (loaded && (!userData || userData.roleName !== "Admin")) {
      navigate("/");
    }
  }, [loaded, navigate, userData]);

  const handleGOBack = () => {
    navigate("/");
  };
  useEffect(() => {
    if (getMessage()) {
      setMenuData("MenuStaff");
    }
  }, []);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ backgroundColor: "#004b00" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Admin
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
            <ListItem
              disablePadding
              onClick={() => setMenuData("ReadCDashboard")}
            >
              <ListItemButton>
                <ListItemIcon>
                  <MdDashboard />
                </ListItemIcon>
                <ListItemText primary="Thống kê" />
              </ListItemButton>
            </ListItem>

            <ListItem
              disablePadding
              onClick={() => setMenuData("ReadCoffeeShop")}
            >
              <ListItemButton>
                <ListItemIcon>
                  <FaHome />
                </ListItemIcon>
                <ListItemText primary="Trang chủ" />
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
          {menuData === "ReadCoffeeShop" && <ReadCoffeeShop />}
          {menuData === "CreateCoffeeShop" && <CreateCoffeeShop />}
          {menuData === "ReadCDashboard" && <Dashboard />}
          {menuData == "ReadStaff" && <ReadStaff />}
        </Box>
      </Box>
    </>
  );
}
