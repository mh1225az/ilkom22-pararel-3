import React from 'react';
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
} from 'cdbreact';

const Sidebar = () => {
  return (
      <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}/>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">Components</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="chart-line" iconType="solid">
              metrics
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
  )
};

export default Sidebar;