<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="villageAdmin.aspx.cs" Inherits="budgetGit.villageAdmin" %>

<%@ Register Src="~/modal.ascx" TagPrefix="uc1" TagName="modal" %>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>VillageAdmin!</title>

    <link href="Content/bootstrap.css" rel="stylesheet" />
    <link href="villageAdmin.css" rel="stylesheet" />
</head>
<body>
    <form id="form1" runat="server">

        <div class="container">
            <h1 class="h1 text-center pb-2 text-dark font-italic rounded">VILLAGE ADMIN!</h1>
            <div class="row font-weight-bold header">
                <div class="col-6 text-center">Park Details</div>
                <div class="col-6 text-center">Street Details</div>
            </div>
            <div class="row form-inline justify-content-center">
                <div class="row  col-6 justify-content-center">
                    <%--<h3 class="d-block">Park Details</h3>--%>
                    <div>

                        <div class="col-12 mt-2">
                            <label for="name col-form-label" class="d-inline w-25">Name:</label>
                            <input type="text" placeholder="Name" class="name form-control d-inline" id="" />
                        </div>
                        <div class="col-12 mt-2">
                            <label for="year" class="d-inline w-25">Year:</label>
                            <input type="text" placeholder="Start year" class="startYear form-control year" id="" />
                        </div>
                        <div class="col-12 mt-2">
                            <label for="count" class="d-inline w-25">No.Trees:</label>
                            <input type="text" placeholder="number of trees" class="numberOfTree form-control count" id="" />
                        </div>
                        <div class="col-12 mt-2">
                            <label for="area" class="d-inline w-25">Area:</label>
                            <input type="text" placeholder="Area in skm" class="Area form-control area" id="" />
                        </div>
                    </div>

                </div>

                <div class="row  col-6 justify-content-center">


                    <div class="justify-content-center">

                        <div class="col-12 mt-2">
                            <label for="name col-form-label" class="d-inline w-25">Name:</label>
                            <input type="text" placeholder="Name" class="name form-control d-inline" id="streetName" />
                        </div>
                        <div class="col-12 mt-2">

                            <label for="year" class="d-inline w-25">Year:</label>
                            <input type="text" placeholder="Start year" class="startYear form-control year" id="streetYear" />
                        </div>

                        <div class="col-12 mt-2">
                            <label for="area" class="d-inline w-25">Length:</label>
                            <input type="text" placeholder="Length in KM" class="Area form-control length" id="streetLength" />
                        </div>
                    </div>

                </div>
            </div>


            <div class="d-flex justify-content-around">
                <input type="button" name="name" id="addPark" value="Add Park" class="mt-5 btn btn-lg bg-info border border-dark btnDelete font-weight-bold" />
                <input type="button" name="name" id="addStreet" value="Add Street" class="mt-5 btn btn-lg bg-info border border-dark btnDelete font-weight-bold" />

            </div>
        </div>

        <div class="row mt-3">
            <div class="col-6 border">
                <div class="row m-1 identifier">
                    <%-- <div class="col-4">
                        <div class="card mb-3" style="width: 15rem;">
                            <div class="card-body">
                                <h5 class="card-title">Green park</h5>
                                <p class="card-text">YOB:</p>
                                <p class="card-text">Area:</p>
                                <p class="card-text">NO. Trees:</p>
                            </div>
                        </div>
                    </div>   --%>
                </div>
                <div class="row m-1 streetIdentifier">
                    <%-- <div class="col-4">
                        <div class="card mb-3" style="width: 15rem;">
                            <div class="card-body">
                                <h5 class="card-title">Street one</h5>
                                <p class="card-text">YOB:</p>
                                <p class="card-text">Length:</p>                                
                            </div>
                        </div>
                    </div> --%>
                </div>
            </div>
            <div class="col-6 border  text-center">
                <div class="row">
                    <div class="col-12">
                        <div class="report"></div>
                        <div class="thousand"></div>
                        <div class="age"></div>
                    </div>
                    <div class="col-12">
                         <div class="streetAverage"></div>
                        <div class="streetSizeClassi"></div>                        
                    </div>
                </div>

            </div>
        </div>

        <div class="row">
        </div>
        <uc1:modal runat="server" ID="modal" />
    </form>
    <script src="villageAdminUIctrl.js"></script>
    <script src="villageAdminAdminCtrl.js"></script>
    <script src="villageAdmin.js"></script>
    <script src="Scripts/jquery-3.0.0.js"></script>
    <script src="Scripts/popper.js"></script>
    <script src="Scripts/bootstrap.js"></script>
</body>
</html>
