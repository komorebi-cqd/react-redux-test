import React from 'react'
import { Switch,Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Menu from '../components/Menu'

import Welcome from './Welcome'

export default function Admin() {
  return (
    <Layout 
      header={<Header />}
      aside={<Menu />}
    >
      <Switch>
        <Route path={'/'} component={Welcome}></Route>
      </Switch>
    </Layout>
  )
}
