var CookiesLib = {
    setCookie: function (name, value, exp) {
        var cookie = name + "=" + value + "; path=/";
        if (exp) {
            cookie += "; expires=" + exp.toUTCString();
        }
        document.cookie = cookie;
    },

    getCookie: function (name) {
        var cookies = document.cookie.split("; ");
        for (var i = 0; i < cookies.length; i++) {
            var c = cookies[i].split("=");
            if (c[0] === name) return c[1];
        }
        return null;
    },

    deleteCookie: function (name) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    },

    allCookieList: function () {
        return document.cookie;
    },

    hasCookie: function (name) {
        return this.getCookie(name) !== null;
    }
};
