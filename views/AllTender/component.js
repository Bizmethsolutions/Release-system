import React, {PureComponent} from "react";
import _ from 'lodash';
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems, secondaryListItems } from "../../components/SideBar.js";
import Header from "../../components/Header.js";
import SideNavigation from "../../components/SideNavigation.js";
import containerTheme from '../../theme/containerTheme.js'
import { useState } from "react";

const useStyles = makeStyles(theme => (containerTheme(theme)));
class AllTender extends PureComponent {

  constructor() {
    super()
    this.state = {
      error: "",
      tenders: []
    }
  }

  componentDidMount = async() => {
   const { getAllTender } = this.props
   const { value } = await getAllTender();
   let tenderList = []
   if(value) {
    this.setState({ tenders: _.get(value, 'results',  []) })
   }
   
  }
  render() {
  const { classes } = this.props;
  const { tenders } = this.state;
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  console.log(classes, 'classes')
  return (
    <div className={classes.root}>
    <CssBaseline />
    
      <Header heading="MyGETs"/>
    <SideNavigation tenders={tenders} />
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>
              {/* <Chart /> */}
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              {/* <Deposits /> */}
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {/* <Orders /> */}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </main>
  </div>
  );
  }
}

export default withStyles(useStyles)(AllTender)
