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
            <h1 class="h1 text-center m-5 pb-2 text-dark font-italic border border-info rounded">VILLAGE ADMIN!</h1>
            <div class="row">
                <div class="col-3">
                    Name:
                    <input type="text" placeholder="Name" class ="name"/>
                </div>
                <div class="col-3">
                    Year:
                    <input type="text" placeholder="Start year" class ="startYear"/>
                </div>
                <div class="col-3">
                    No.Trees:
                    <input type="text" placeholder="number of trees" class ="numberOfTree"/>
                </div>
                <div class="col-3">
                    Area:
                    <input type="text" placeholder="Area in skm" class ="Area"/>
                </div>
            </div>
            <div class="d-flex justify-content-around">
                <input type="button" name="name" id="addPark" value="Add Park" class="mt-5 btn btn-lg bg-info border border-dark btnDelete font-weight-bold" />
                <input type="button" name="name" value="Generate Report" class="mt-5 btn btn-lg bg-info border border-dark btnDelete font-weight-bold" />
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-6 border">
                <h2 class="text-center">Parks</h2>
                <div class="row m-1 identifier">
                    <%--<div class="col-4">
                        <div class="card mb-3" style="width: 15rem;">
                            <div class="card-body">
                                <h5 class="card-title">Green park</h5>
                                <p class="card-text">YOB:</p>
                                <p class="card-text">Area:</p>
                                <p class="card-text">NO. Trees:</p>
                            </div>
                        </div>
                    </div>  --%>                  
                </div>
            </div>
            <div class="col-6 border"></div>
        </div>      
        <uc1:modal runat="server" id="modal" />
    </form>    

    <script src="villageAdmin.js"></script>
    <script src="Scripts/jquery-3.0.0.js"></script>
    <script src="Scripts/popper.js"></script>
    <script src="Scripts/bootstrap.js"></script>
</body>
</html>
