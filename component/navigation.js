function loadNav() {
    document.getElementById("nav").innerHTML =
        "<!-- Navigation -->" +
        '<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">' +
        '<div class="container">' +
        '<!-- Brand and toggle get grouped for better mobile display -->' +
        '<div class="navbar-header">' +
        '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">' +
        '<span class="sr-only">Toggle navigation</span>' +
        '<span class="icon-bar"></span>' +
        '<span class="icon-bar"></span>' +
        '<span class="icon-bar"></span>' +
        '</button>' +
        '<a class="navbar-brand" href="#">Eagle Stationary</a>' +
        '</div>' +
        '<!-- Collect the nav links, forms, and other content for toggling -->' +
        '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">' +
        '<ul class="nav navbar-nav">' +
        '<li>' +
        '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">สินค้า<span class="caret"></span></a>' +
        '<ul class="dropdown-menu">' +
        '<li><a href="../product/dashboard.html">รายละเอียดสินค้า</a></li>' +
        '<li><a href="../product/AddProductAmount.html">การผลิตสินค้า</a></li>' +
        '</ul>' +
        '</li>' +
        '<li>' +
        '<a href="../order/dashboard.html">คำสั่งซื้อ</a>' +
        '</li>' +
        '<li>' +
        '<a href="../customer/dashboard.html">ลูกค้า</a>' +
        '</li>' +
        '<li>' +
        '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">วัตถุดิบ<span class="caret"></span></a>' +
        '<ul class="dropdown-menu">' +
        '<li><a href="../material/dashboard.html">รายละเอียดวัตถุดิบ</a></li>' +
        '<li><a href="../material/BalanceDashBoard.html">การรับเข้าวัตถุดิบ</a></li>' +
        '</ul>' +
        '</li>' +
        '<li>' +
        '<a href="javascript:Logout();">ลงชื่อออก</a>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '<!-- /.navbar-collapse -->' +
        '</div>' +
        '<!-- /.container -->' +
        '</nav>';
}
function Logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("isAdmin");
    window.location.href = '../index.html';
}