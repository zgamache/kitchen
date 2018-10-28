import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  withStyles,
} from '@material-ui/core'

import { Main, Example } from './screens'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main,
  },
  {
    path: '/example',
    name: 'Example',
    component: Example,
  },
]

const drawerWidth = 240

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    flexShrink: 0,
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },
})

function App(props) {
  const { classes } = props

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classes.appBar}
        >
          <Toolbar>
            <Typography>TEST</Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          anchor="left"
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <List>
            {routes.map(route => (
              <Link to={route.path} key={route.name}>
                <ListItem button key={route.name}>
                  <ListItemText primary={route.name} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            {routes.map(route => (
              <Route exact path={route.path} component={route.component} key={route.name} />
            ))}
          </Switch>
        </main>
      </div>
    </Router>

  /*
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/example">Create React App Example</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Main} />
        <Route path="/example" component={Example} />
      </div>
    </Router>
  */
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App)
