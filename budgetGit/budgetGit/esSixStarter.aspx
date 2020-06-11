<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="esSixStarter.aspx.cs" Inherits="budgetGit.esSixStarter" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="esSixCSS.css" rel="stylesheet" />
    <link href="Content/bootstrap.css" rel="stylesheet" />    
</head>
<body>
    <form id="form1" runat="server">
        <div class="container"> 
            <div class="row">
                <div class="col-12 d-flex justify-content-center green"> 
                    <div class="box text-center d-flex justify-content-center align-items-center bg-success">First</div>
                </div>
                <div class="col-12 d-flex justify-content-center blue"> 
                    <div class="box text-center d-flex justify-content-center align-items-center bg-info">Second</div>
                </div>
                <div class="col-12 d-flex justify-content-center yellow"> 
                    <div class="box text-center d-flex justify-content-center align-items-center bg-warning">Third</div>
                </div>
            </div>
        </div>
    </form>
    <script src="esSixJs.js"></script>
    <script src="Scripts/jquery-3.0.0.js"></script>
    <script src="Scripts/popper.js"></script>
    <script src="Scripts/bootstrap.js"></script>
</body>
</html>
