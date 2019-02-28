import React from 'react';
import yaml from 'yamljs';

export default class Versions extends React.Component {
    state = {
        name: ["XXX1", "XXX2"],

        jsonApiVersion: "extensions/v1beta1",
        JsonReplicas: "5",
        olderVersion: [],
        oldVersionExis: [],
        temp: "",
        tempDataJson: {
            "apiVersion": "",
            "kind": "",
            "metadata": {
                "name": ""
            },
            "spec": {
                "replicas": "",
                "strategy": {
                    "type": "",
                    "rollingUpdate": {
                        "maxSurge": null,
                        "maxUnavailable": null
                    }
                },
                "template": {
                    "metadata": {
                        "labels": {
                            "app": ""
                        }
                    },
                    "spec": {
                        "containers": [
                            {
                                "name": "",
                                "image": "",
                                "env": [
                                    {
                                        "name": "",
                                        "value": ""
                                    }
                                ],
                                "livenessProbe": {
                                    "httpGet": {
                                        "path": "",
                                        "port": null
                                    },
                                    "initialDelaySeconds": null,
                                    "periodSeconds": null,
                                    "failureThreshold": null,
                                    "successThreshold": null
                                },
                                "readinessProbe": {
                                    "httpGet": {
                                        "path": "",
                                        "port": null
                                    },
                                    "initialDelaySeconds": null
                                }
                            }
                        ]
                    }
                }
            }
        },
        jsonData: [],
        tempInput: []
    }

    onChanceApp(e) {

        this.setState({ temp: e.target.value })

    }
    SaveApp = () => {
        var newArray = this.state.name.slice();
        var temp2 = this.state.temp;
        newArray.push(temp2);
        var tempJson = this.state.jsonData;
        this.setState({ name: newArray, tempDataJson: tempJson });
    }
    onChangesFile(e) {
        let files = e.target.files;

        let reader = new FileReader();
        reader.readAsText(files[0]);

        reader.onload = (e) => {
            const yazi = e.target.result;

            var inputfile = e.target,

                yaml = require('js-yaml'),
                obj = yaml.load(yazi, { encoding: 'utf-8' });
            const jsonForm = JSON.stringify(obj);
            var jsonParsed = JSON.parse(jsonForm);
            console.log({ jsonForm })


            this.setState({ jsonData: jsonParsed })
        }
    }


    //       var versionData = JSON.parse(this.state.jsonData);


    //       var meta = versionData.apiVersion;
    //       var replicas = versionData.spec.replicas;

    //       this.setState({jsonApiVersion: meta })


    //     }
    //   }
    checkApp(value) {
        if (value.target.value === "XXX1") {
            this.oldVersionDrop1(value.target.value);
        }
        else if (value.target.value === "XXX2") {
            this.oldVersionDrop2(value.target.value);
        } else {
            this.oldVersionDrop3(value.target.value);
        }
    }
    oldVersionDrop1 = (e) => {
        var olderArray = ["XX1", "XX2"];
        this.setState({
            olderVersion: olderArray, tempDataJson: {
                "apiVersion": "extensions/v1beta1",
                "kind": "Deployment",
                "metadata": {
                    "name": "demo-app"
                },
                "spec": {
                    "replicas": "5",
                    "strategy": {
                        "type": "RollingUpdate",
                        "rollingUpdate": {
                            "maxSurge": 1,
                            "maxUnavailable": 0
                        }
                    },
                    "template": {
                        "metadata": {
                            "labels": {
                                "app": "demo-app"
                            }
                        },
                        "spec": {
                            "containers": [
                                {
                                    "name": "demo-app",
                                    "image": "gsengun/nodejs-demo-app:1.0.0",
                                    "env": [
                                        {
                                            "name": "PORT",
                                            "value": "80"
                                        }
                                    ],
                                    "livenessProbe": {
                                        "httpGet": {
                                            "path": "/",
                                            "port": 80
                                        },
                                        "initialDelaySeconds": 3,
                                        "periodSeconds": 5,
                                        "failureThreshold": 3,
                                        "successThreshold": 1
                                    },
                                    "readinessProbe": {
                                        "httpGet": {
                                            "path": "/",
                                            "port": 80
                                        },
                                        "initialDelaySeconds": 1
                                    }
                                }
                            ]
                        }
                    }
                }
            }
        });
    }
    oldVersionDrop2 = (e) => {
        var olderArray = ["YY1", "YY2"];
        this.setState({
            olderVersion: olderArray, tempDataJson: {
                "apiVersion": "extensions/v2beta2",
                "kind": "Dep",
                "metadata": {
                    "name": "demo-app"
                },
                "spec": {
                    "replicas": "4",
                    "strategy": {
                        "type": "RollingUpdate",
                        "rollingUpdate": {
                            "maxSurge": 1,
                            "maxUnavailable": 0
                        }
                    },
                    "template": {
                        "metadata": {
                            "labels": {
                                "app": "demo-app"
                            }
                        },
                        "spec": {
                            "containers": [
                                {
                                    "name": "demo-app",
                                    "image": "gsengun/nodejs-demo-app:1.0.0",
                                    "env": [
                                        {
                                            "name": "PORT",
                                            "value": "80"
                                        }
                                    ],
                                    "livenessProbe": {
                                        "httpGet": {
                                            "path": "/",
                                            "port": 80
                                        },
                                        "initialDelaySeconds": 3,
                                        "periodSeconds": 5,
                                        "failureThreshold": 3,
                                        "successThreshold": 1
                                    },
                                    "readinessProbe": {
                                        "httpGet": {
                                            "path": "/",
                                            "port": 80
                                        },
                                        "initialDelaySeconds": 1
                                    }
                                }
                            ]
                        }
                    }
                }
            }
        });
    }
    oldVersionDrop3 = (e) => {
        var olderArray = ["ZZ1", "ZZ2"];
        var tempJson = this.state.jsonData;
        this.setState({ olderVersion: olderArray, tempDataJson: tempJson });
    }

    render() {
        return (<div class='row' style={containerStyle}>
            <div class="col-md-12">

                <div class="form-group " style={formStyle}>
                    <div class="col-md-3"></div>
                    <label class="control-label col-md-2" style={{ fontSize: 22, marginLeft: -30 }}>Select Application:</label>
                    <div class="col-md-2">

                        <select class="bs-select form-control" onInput={(value) => this.checkApp(value)}>

                            <option>----select----</option>
                            {this.state.name.map(appName => (

                                <option >{appName} </option>
                            ))}


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
                                        {this.state.olderVersion.map(older => (
                                            <option>{older}</option>
                                        ))}


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
                                <h2>{this.state.tempDataJson.apiVersion}</h2>

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
                                            <h4 class="modal-title">Change Version</h4>
                                        </div>
                                        <div class="modal-body">
                                            <div class="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: 'auto', height: 700 }}><div class="scroller" style={{ height: 700, overflowY: ' scroll', width: 'auto' }} data-always-visible="1" data-rail-visible1="1" data-initialized="1">
                                                <div class="row">

                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label class="control-label">apiVersion:</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p>
                                                                <input type="text" class="col-md-12 form-control" defaultValue={this.state.tempDataJson != '' ? this.state.tempDataJson.apiVersion : null} /> </p>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label class="control-label">kind:</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p>
                                                                <input type="text" class="col-md-12 form-control" defaultValue={this.state.tempDataJson != '' ? this.state.tempDataJson.kind : null} /> </p>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label style={{ fontWeight: 'bold' }} class="control-label">metadata:</label>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label class="control-label">name:</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p>
                                                                <input type="text" class="col-md-12 form-control" defaultValue={this.state.tempDataJson != '' ? this.state.tempDataJson.name : null} /> </p>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label style={{ fontWeight: 'bold' }} class="control-label">spec:</label>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label class="control-label">replicas:</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p>
                                                                <input type="text" class="col-md-12 form-control" defaultValue={this.state.tempDataJson != '' ? this.state.tempDataJson.replicas : null} /> </p>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label style={{ fontWeight: 'bold' }} class="control-label">strategy:</label>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label class="control-label">type:</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p>
                                                                <input type="text" class="col-md-12 form-control" defaultValue={this.state.tempDataJson != '' ? this.state.tempDataJson.type : null} /> </p>
                                                        </div>
                                                    </div>


                                                    <div class="col-md-12">

                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label style={{ fontWeight: 'bold' }} class="control-label">rollingUpdate:</label>

                                                        </div>

                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label class="control-label">maxSurge:</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p>
                                                                <input type="text" class="col-md-12 form-control" defaultValue={this.state.tempDataJson != '' ? this.state.tempDataJson.maxSurge : null} /> </p>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label class="control-label">maxUnavailable:</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p>
                                                                <input type="text" class="col-md-12 form-control" defaultValue={this.state.tempDataJson != '' ? this.state.tempDataJson.maxUnavailable : null} /> </p>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label style={{ fontWeight: 'bold' }} class="control-label">template:</label>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label style={{ fontWeight: 'bold' }} class="control-label">metadata:</label>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label style={{ fontWeight: 'bold' }} class="control-label">labels:</label>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label class="control-label">app:</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p>
                                                                <input type="text" class="col-md-12 form-control" defaultValue={this.state.tempDataJson != '' ? this.state.tempDataJson.app : null} /> </p>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label style={{ fontWeight: 'bold' }} class="control-label">spec:</label>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label style={{ fontWeight: 'bold' }} class="control-label">containers:</label>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label class="control-label">- name:</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p>
                                                                <input type="text" class="col-md-12 form-control" defaultValue={this.state.tempDataJson != '' ? this.state.tempDataJson.name : null} /> </p>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label class="control-label">image:</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p>
                                                                <input type="text" class="col-md-12 form-control" defaultValue={this.state.tempDataJson != '' ? this.state.tempDataJson.image : null} /> </p>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label style={{ fontWeight: 'bold' }} class="control-label">env:</label>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label class="control-label">- name:</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p>
                                                                <input type="text" class="col-md-12 form-control" defaultValue={this.state.tempDataJson != '' ? this.state.tempDataJson.name : null} /> </p>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label class="control-label">value:</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p>
                                                                <input type="text" class="col-md-12 form-control" defaultValue={this.state.tempDataJson != '' ? this.state.tempDataJson.value : null} /> </p>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label style={{ fontWeight: 'bold' }} class="control-label">livenessProbe:</label>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label style={{ fontWeight: 'bold' }} class="control-label">httpGet:</label>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label class="control-label">path:</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p>
                                                                <input type="text" class="col-md-12 form-control" defaultValue={this.state.tempDataJson != '' ? this.state.tempDataJson.path : null} /> </p>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label class="control-label">port:</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p>
                                                                <input type="text" class="col-md-12 form-control" defaultValue={this.state.tempDataJson != '' ? this.state.tempDataJson.port : null} /> </p>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label class="control-label">initialDelaySeconds:</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p>
                                                                <input type="text" class="col-md-12 form-control" defaultValue={this.state.tempDataJson != '' ? this.state.tempDataJson.initialDelaySeconds : null} /> </p>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label class="control-label">periodSeconds:</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p>
                                                                <input type="text" class="col-md-12 form-control" defaultValue={this.state.tempDataJson != '' ? this.state.tempDataJson.periodSeconds : null} /> </p>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label class="control-label">failureThreshold:</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p>
                                                                <input type="text" class="col-md-12 form-control" defaultValue={this.state.tempDataJson != '' ? this.state.tempDataJson.failureThreshold : null} /> </p>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label class="control-label">successThreshold:</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p>
                                                                <input type="text" class="col-md-12 form-control" defaultValue={this.state.tempDataJson != '' ? this.state.tempDataJson.successThreshold : null} /> </p>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label style={{ fontWeight: 'bold' }} class="control-label">readinessProbe:</label>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label style={{ fontWeight: 'bold' }} class="control-label">httpGet:</label>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label class="control-label">path:</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p>
                                                                <input type="text" class="col-md-12 form-control" defaultValue={this.state.tempDataJson != '' ? this.state.tempDataJson.path : null} /> </p>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label class="control-label">port:</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p>
                                                                <input type="text" class="col-md-12 form-control" defaultValue={this.state.tempDataJson != '' ? this.state.tempDataJson.port : null} /> </p>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="col-md-4" style={{ marginTop: 25 }}>
                                                            <label class="control-label">initialDelaySeconds:</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p>
                                                                <input type="text" class="col-md-12 form-control" defaultValue={this.state.tempDataJson != '' ? this.state.tempDataJson.initialDelaySeconds : null} /> </p>
                                                        </div>
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
                                                            <input type="text" class="col-md-12 form-control" onChange={(e) => { this.onChanceApp(e) }} /> </p>
                                                        <br />
                                                    </div>


                                                </div>

                                            </div><div class="slimScrollBar" style={{ width: 7, position: ' absolute', top: 0, opacity: 0.4, display: 'none', borderRadius: 7, Zindex: 99, right: 1, height: 100 }}></div><div class="slimScrollRail" style={{ width: 7, height: '100%', position: 'absolute', top: 0, display: 'none', borderRadius: 7, opacity: 0.2, Zindex: 90, right: 1 }}></div></div>
                                        </div>


                                        <div class="modal-footer">
                                            <input type="file" onChange={(e) => this.onChangesFile(e)} name="name" />
                                            <button type="button" data-dismiss="modal" class="btn dark btn-outline">Close</button>
                                            <button type="button" onClick={this.SaveApp} class="btn green">Save changes</button>  </div>



                                    </div>
                                </div>
                            </div>


                            <div id="responsive3" class="modal fade" tabindex="-1" aria-hidden="true" style={{ display: 'none' }}>
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                                            <h4 class="modal-title"></h4>
                                        </div>
                                        <div class="modal-body">
                                            <div class="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: 'auto', height: 500 }}><div class="scroller" style={{ height: 300, overflow: 'hidden', width: 'auto' }} data-always-visible="1" data-rail-visible1="1" data-initialized="1">
                                                <div class="row">

                                                    <div class="col-md-6">

                                                        <h2>


                                                        </h2>
                                                    </div>


                                                </div>

                                            </div><div class="slimScrollBar" style={{ width: 7, position: ' absolute', top: 0, opacity: 0.4, display: 'none', borderRadius: 7, Zindex: 99, right: 1, height: 100 }}></div><div class="slimScrollRail" style={{ width: 7, height: '100%', position: 'absolute', top: 0, display: 'none', borderRadius: 7, opacity: 0.2, Zindex: 90, right: 1 }}></div></div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" data-dismiss="modal" class="btn dark btn-outline">Close</button>

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

    marginLeft: '1650px',
    height: '45px',
    width: '120px'
}



