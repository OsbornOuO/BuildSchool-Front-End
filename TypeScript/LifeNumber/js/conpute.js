var star = (function () {
    function star() {
    }
    return star;
}());
var starlist = [
    { month: 1, date: 20, name: "摩羯座 capricorn.json" },
    { month: 2, date: 19, name: "水瓶座 aquarius-json" },
    { month: 3, date: 20, name: "雙魚座 pisces.json" },
    { month: 4, date: 19, name: "牡羊座 aries.json" },
    { month: 5, date: 20, name: "金牛座 taurus.json" },
    { month: 6, date: 21, name: "雙子座 gemini.json" },
    { month: 7, date: 22, name: "巨蟹座 cancer.json" },
    { month: 8, date: 22, name: "獅子座 leo.json" },
    { month: 9, date: 22, name: "處女座 virgo.json" },
    { month: 10, date: 23, name: "天秤座 libra.json" },
    { month: 11, date: 21, name: "天蠍座 scorpio.json" },
    { month: 12, date: 20, name: "人馬座 sagittarius.json" },
];
var LifeNumber = (function () {
    function LifeNumber(_year, _month, _date) {
        this.year = this.calcutate(_year);
        this.month = this.calcutate(_month);
        this.date = this.calcutate(_date);
        this.mystar = this.getStar(_month, _date);
    }
    LifeNumber.prototype.calcutate = function (str) {
        var count = 0;
        for (var i = 0; i < str.length; i++) {
            count += parseInt(str[i]);
        }
        return count;
    };
    LifeNumber.prototype.getStar = function (m, d) {
        console.log(m, d + "???");
        for (var i = 0; i < starlist.length - 1; i++) {
            if (parseInt(m) == starlist[i].month) {
                if (parseInt(d) > starlist[i].date) {
                    return starlist[i + 1].name;
                }
                else {
                    return starlist[i].name;
                }
            }
        }
        return starlist[0].name;
    };
    LifeNumber.prototype.getLifeNumber = function () {
        var all = this.year + this.month + this.date;
        return this.setLiftNumber(all);
    };
    LifeNumber.prototype.setLiftNumber = function (num) {
        if (num > 10) {
            num = this.setLiftNumber(this.calcutate(num.toString()));
        }
        return num;
    };
    return LifeNumber;
}());
//# sourceMappingURL=conpute.js.map