import React, { useState } from 'react'
import { TabPane, TabContent } from "reactstrap";
import MenuPanes from "../../kardex/invoices/menuPanes";

const TabbedPane = ({ panes = { DEFAULT : {key : 'default', label : 'default'} }, ...props }) => {
    const [ tabActive, setTabActive ] = useState( panes[Object.keys(panes)[0]] )
    return <>
        <MenuPanes options={panes} onClick={(e, obj) => setTabActive(obj)} active={tabActive.key} />
        <TabContent activeTab={tabActive.key} >
            {
                Object.values( panes ).map( ( paneInfo, index ) => 
                    <TabPane tabId={paneInfo.key} key={paneInfo.key} >
                        {
                            props.children[index]
                        }
                    </TabPane>
                )
            }
        </TabContent>
    </>
};

export default TabbedPane;