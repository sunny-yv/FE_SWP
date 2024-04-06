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
import CreateCoffeeShop from "../Admin/CreateCoffeeShop";
import ReadCoffeeShop from "../../components/ReadCoffeeShop";
import ReadCat from "../Manager/ReadCat";
import Collapse from "@mui/material/Collapse";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { MdDomain, MdCreateNewFolder } from "react-icons/md";
import { useAuth, useUserData } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";
import MenuStaff from "../HomeStaff/Menu";
import TableCoffeeShop1 from "../Table/TableCoffeeShop1";
import TableCoffeeShop2 from "../Table/TableCoffeeShop2";
import TableCoffeeShop3 from "../Table/TableCoffeeShop3";
import TableCoffeeShop4 from "../Table/TableCoffeeShop4";
import TableCoffeeShop5 from "../Table/TableCoffeeShop5";
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

export default function Admin() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [menuData, setMenuData] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const handleMenuChange = (menu) => {
    setMenuData(menu);
    handleMenuClose();
  };

  const navigate = useNavigate();
  const userData = useUserData();
  const { loaded } = useAuth();

  useEffect(() => {
    if (loaded && (!userData || userData.roleName !== "Admin")) {
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
              onClick={() => setMenuData("ReadCoffeeShop")}
            >
              <ListItemButton>
                <ListItemIcon>
                  <MdDomain />
                </ListItemIcon>
                <ListItemText primary="Trang chủ" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={() => setMenuData("Readcat")}>
              <ListItemButton>
                <ListItemIcon>
                  <MdCreateNewFolder />
                </ListItemIcon>
                <ListItemText primary="Quản lý" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleMenuOpen}>
                <ListItemIcon>
                  <MdCreateNewFolder />
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
        <Menu
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={handleMenuClose}
          MenuListProps={{ onMouseLeave: handleMenuClose }}
        >
          <MenuItem onClick={() => handleMenuChange("MenuStaff")}>
            Menu Staff
          </MenuItem>
          <MenuItem onClick={() => handleMenuChange("TableCoffeeShop1")}>
            Chi nhánh Bình Tân
          </MenuItem>
          <MenuItem onClick={() => handleMenuChange("TableCoffeeShop2")}>
            Chi nhánh Quận 1
          </MenuItem>
          <MenuItem onClick={() => handleMenuChange("TableCoffeeShop3")}>
            Chi nhánh Tân Bình
          </MenuItem>
          <MenuItem onClick={() => handleMenuChange("TableCoffeeShop4")}>
            Chi nhánh Quận 8
          </MenuItem>
          <MenuItem onClick={() => handleMenuChange("TableCoffeeShop5")}>
            Chi nhánh Quận 2
          </MenuItem>
        </Menu>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {menuData === "ReadCoffeeShop" && <ReadCoffeeShop />}
          {menuData === "CreateCoffeeShop" && <CreateCoffeeShop />}
          {menuData === "Readcat" && <ReadCat />}
          {menuData === "MenuStaff" && <MenuStaff />}
          {menuData === "TableCoffeeShop1" && <TableCoffeeShop1 />}
          {menuData === "TableCoffeeShop2" && <TableCoffeeShop2 />}
          {menuData === "TableCoffeeShop3" && <TableCoffeeShop3 />}
          {menuData === "TableCoffeeShop4" && <TableCoffeeShop4 />}
          {menuData === "TableCoffeeShop5" && <TableCoffeeShop5 />}
        </Box>
      </Box>
    </>
  );
}
