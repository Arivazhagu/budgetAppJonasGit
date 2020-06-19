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
        <h1 class="h1 text-center font-italic">This is The Heading    </h1>
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
        <%--<div class="container">
            <div class="row">
                <div class="col-1 sno">   </div>
                <div class="col-10 question"> 
                    <div class="row">
                        <div class="col-12 text-center border">Question</div>
                    </div>
                    <div class="row"> 
                        <div class="col-4 opt-1 border">opt-1</div>
                        <div class="col-4 opt-2 border">opt-2</div>
                        <div class="col-4 opt-3 border">opt-3</div>
                        <div class="col-4 opt-4 border">opt-4</div>
                    </div>
                </div>
                <div class="col-1 comments"> comments  </div>
            </div>
        </div>--%>
    </form>
    <script src="esSixJs.js"></script>
    <script src="Scripts/jquery-3.0.0.js"></script>
    <script src="Scripts/popper.js"></script>
    <script src="Scripts/bootstrap.js"></script>
</body>
</html>
