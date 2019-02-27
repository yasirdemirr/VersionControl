import React from 'react';

export default class Versions extends React.Component {


    render() {
        return (<div class='row' style={containerStyle}>
            <div class="col-md-12">
            
                <div class="form-group " style={formStyle}>
                <div class="col-md-3"></div>
                    <label class="control-label col-md-2" style={{fontSize:22,marginLeft:-30}}>Select Application:</label>
                    <div class="col-md-2">
                        <select class="bs-select form-control">
                            <option>Mustard</option>
                            <option>Ketchup</option>
                            <option>Relish</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                    <a class="btn dark  btn-outline sbold" data-toggle="modal" href="#responsive2" > ADD NEW APPLICATION </a>
                </div>
                <div class="col-md-3"></div>
                </div>
                
            </div>




            <div style={cardStyle} >

                <div class="col-md-4"  >

                    <div class="portlet light bordered" style={{ height: 200 }}>
                        <div class="portlet-title">
                            <div class="caption font-purple-plum">
                                <i class="icon-speech font-purple-plum"></i>
                                <span class="caption-subject bold uppercase"> Older Versions</span>

                            </div>

                        </div>
                        <div class="portlet-body">
                            <div id="context" data-toggle="context" data-target="#context-menu">

                                <div class="col-md-6"   >
                                    <select href="#responsive3" class="bs-select form-control " style={{ backgroundColor: '#E1E5EC', marginLeft: 120, marginTop: 30 }}>
                                        <option>extensions/v1beta1</option>
                                        <option>extensions/v1beta1</option>
                                        <option>extensions/v1beta1</option>
                                    </select>

                                </div>

                            </div>

                            <div id="context-menu">
                                <ul class="dropdown-menu" role="menu">
                                    <li>
                                        <a href="javascript:;">
                                            <i class="icon-user"></i> New User </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <i class="icon-present"></i> New Event
                                          <span class="badge badge-success">4</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <i class="icon-basket"></i> New order </a>
                                    </li>
                                    <li class="divider"> </li>
                                    <li>
                                        <a href="javascript:;">
                                            <i class="icon-flag"></i> Pending Orders
                                          <span class="badge badge-danger">4</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <i class="icon-users"></i> Pending Users
                                          <span class="badge badge-warning">12</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="col-md-4">

                    <div class="portlet light bordered" style={{ height: 200 }}>
                        <div class="portlet-title">
                            <div class="caption font-purple-plum">
                                <i class="icon-speech font-purple-plum"></i>
                                <span class="caption-subject bold uppercase"> Current Version</span>

                            </div>

                        </div>
                        <div class="portlet-body">
                            <div id="context" data-toggle="context" data-target="#context-menu">
                                <h2>extensions/v1beta1</h2>

                                <p></p>

                                <a class="btn dark btn-outline sbold" data-toggle="modal" href="#responsive3" style={{ marginLeft: -30 }}> Show Details </a>
                            </div>

                            <div id="context-menu">
                                <ul class="dropdown-menu" role="menu">
                                    <li>
                                        <a href="javascript:;">
                                            <i class="icon-user"></i> New User </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <i class="icon-present"></i> New Event
                                          <span class="badge badge-success">4</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <i class="icon-basket"></i> New order </a>
                                    </li>
                                    <li class="divider"> </li>
                                    <li>
                                        <a href="javascript:;">
                                            <i class="icon-flag"></i> Pending Orders
                                          <span class="badge badge-danger">4</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <i class="icon-users"></i> Pending Users
                                          <span class="badge badge-warning">12</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>


                <div class="col-md-4">

                    <div class="portlet light bordered" style={{ height: 200 }}>
                        <div class="portlet-title">
                            <div class="caption font-purple-plum">
                                <i class="icon-speech font-purple-plum"></i>
                                <span class="caption-subject bold uppercase"> Change Version</span>
                            </div>
                            <div id="responsive" class="modal fade" tabindex="-1" aria-hidden="true" style={{ display: 'none' }}>
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                                            <h4 class="modal-title">Responsive &amp; Scrollable</h4>
                                        </div>
                                        <div class="modal-body">
                                            <div class="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: 'auto', height: 300 }}><div class="scroller" style={{ height: 300, overflow: 'hidden', width: 'auto' }} data-always-visible="1" data-rail-visible1="1" data-initialized="1">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <h4></h4>

                                                        <h3>apiVersion:</h3>

                                                        <h3>apiVersion:</h3>

                                                        <h3>apiVersion:</h3>

                                                        <h3>apiVersion:</h3>

                                                    </div>
                                                    <div class="col-md-6">

                                                        <p>
                                                            <input type="text" class="col-md-12 form-control" /> </p>
                                                        <br />
                                                        <p>
                                                            <input type="text" class="col-md-12 form-control" /> </p>
                                                        <br />
                                                        <p>
                                                            <input type="text" class="col-md-12 form-control" /> </p>
                                                        <br />

                                                    </div>
                                                </div>
                                            </div><div class="slimScrollBar" style={{ width: 7, position: ' absolute', top: 0, opacity: 0.4, display: 'none', borderRadius: 7, Zindex: 99, right: 1, height: 300 }}></div><div class="slimScrollRail" style={{ width: 7, height: '100%', position: 'absolute', top: 0, display: 'none', borderRadius: 7, opacity: 0.2, Zindex: 90, right: 1 }}></div></div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" data-dismiss="modal" class="btn dark btn-outline">Close</button>
                                            <button type="button" class="btn green">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div id="responsive2" class="modal fade" tabindex="-1" aria-hidden="true" style={{ display: 'none' }}>
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                                            <h4 class="modal-title">Responsive &amp; Scrollable</h4>
                                        </div>
                                        <div class="modal-body">
                                            <div class="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: 'auto', height: 90 }}><div class="scroller" style={{ height: 300, overflow: 'hidden', width: 'auto' }} data-always-visible="1" data-rail-visible1="1" data-initialized="1">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <h4></h4>

                                                        <h3>Application Name:</h3>
                                                    </div>
                                                    <div class="col-md-6">

                                                        <p>
                                                            <input type="text" class="col-md-12 form-control" /> </p>
                                                        <br />

                                                        <div class="fileinput fileinput-new" data-provides="fileinput">
                                                            <span class="btn green btn-file">
                                                                <span class="fileinput-new"> Select file </span>
                                                                <span class="fileinput-exists"> Change </span>
                                                                <input type="hidden" /><input type="file" name="..." /> </span>
                                                            <span class="fileinput-filename"> </span> &nbsp;
                                                        <a href="javascript:;" class="close fileinput-exists" data-dismiss="fileinput"> </a>
                                                        </div>



                                                    </div>


                                                </div>

                                            </div><div class="slimScrollBar" style={{ width: 7, position: ' absolute', top: 0, opacity: 0.4, display: 'none', borderRadius: 7, Zindex: 99, right: 1, height: 100 }}></div><div class="slimScrollRail" style={{ width: 7, height: '100%', position: 'absolute', top: 0, display: 'none', borderRadius: 7, opacity: 0.2, Zindex: 90, right: 1 }}></div></div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" data-dismiss="modal" class="btn dark btn-outline">Close</button>
                                            <button type="button" class="btn green">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div id="responsive3" class="modal fade" tabindex="-1" aria-hidden="true" style={{ display: 'none' }}>
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                                            <h4 class="modal-title">Responsive &amp; Scrollable</h4>
                                        </div>
                                        <div class="modal-body">
                                            <div class="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: 'auto', height: 500 }}><div class="scroller" style={{ height: 300, overflow: 'hidden', width: 'auto' }} data-always-visible="1" data-rail-visible1="1" data-initialized="1">
                                                <div class="row">

                                                    <div class="col-md-6">

                                                        <h2>
                                                            apiVersion: extensions/v1beta1<br />
                                                            kind: Deployment<br />
                                                            metadata:<br />
                                                            name: demo-app<br />
                                                            spec:<br />
                                                            replicas: 5<br />
                                                            strategy:<br />
                                                            type: RollingUpdate<br />
                                                            rollingUpdate:<br />
                                                            maxSurge: 1<br />
                                                            maxUnavailable: 0<br />
                                                            template:<br />
                                                            metadata:<br />
                                                            labels:<br />
                                                            app: demo-app<br />
                                                            spec:<br />
                                                            containers:<br />
                                                            - name: demo-app<br />
                                                            image: gsengun/nodejs-demo-app:1.0.0 <br />
                                                            env:
                                                            - name: PORT
                                                              value: "80"
                                                            livenessProbe:
                                                              httpGet:
                                                                path: /
                                                                port: 80
                                                              initialDelaySeconds: 3
                                                              periodSeconds: 5
                                                              failureThreshold: 3
                                                              successThreshold: 1
                                                            readinessProbe:
                                                              httpGet:
                                                                path: /
                                                                port: 80
                                                              initialDelaySeconds: 1
                                                    
                                                    
                                                    
                                                    
                                                     </h2>



                                                    </div>


                                                </div>

                                            </div><div class="slimScrollBar" style={{ width: 7, position: ' absolute', top: 0, opacity: 0.4, display: 'none', borderRadius: 7, Zindex: 99, right: 1, height: 100 }}></div><div class="slimScrollRail" style={{ width: 7, height: '100%', position: 'absolute', top: 0, display: 'none', borderRadius: 7, opacity: 0.2, Zindex: 90, right: 1 }}></div></div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" data-dismiss="modal" class="btn dark btn-outline">Close</button>
                                            <button type="button" class="btn green">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="portlet-body">
                            <div id="context" data-toggle="context" data-target="#context-menu">
                                <a class="btn dark btn-outline sbold" data-toggle="modal" href="#responsive" style={{ marginTop: 30 }}> Change Version </a>
                            </div>

                            <div id="context-menu">
                                <ul class="dropdown-menu" role="menu">
                                    <li>
                                        <a href="javascript:;">
                                            <i class="icon-user"></i> New User </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <i class="icon-present"></i> New Event
                                               <span class="badge badge-success">4</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <i class="icon-basket"></i> New order </a>
                                    </li>
                                    <li class="divider"> </li>
                                    <li>
                                        <a href="javascript:;">
                                            <i class="icon-flag"></i> Pending Orders
                                               <span class="badge badge-danger">4</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <i class="icon-users"></i> Pending Users
                                               <span class="badge badge-warning">12</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <button style={buttonStyle} type="button" class="btn blue-madison">DEPLOY</button>

        </div>

        )
    }
}


const containerStyle = {
    flex: 1,

    marginLeft: '40px',
    marginRight: '40px'
}

const formStyle = {
    marginLeft: '0px',
    marginTop: '150px'
}

const cardStyle = {
    marginTop: '250px',

}

const buttonStyle = {

    marginLeft: '1500px',
    height: '45px',
    width: '120px'
}



