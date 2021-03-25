const OsaKeyboard = {
    isAlphanumeric: function(char) {
        const CHARS = new Set("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
        return CHARS.has(char);
    },
    processKorToEng: function (targetString) {
        /* start inko */
        /* !!!!!! 건들지 마시오, 한타 > 영타 변환임 start inko */
        var n = "rRseEfaqQtTdwWczxvgASDFGZXCVkoiOjpuPhynbmlYUIHJKLBNM",
            e =
                "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎㅁㄴㅇㄹㅎㅋㅌㅊㅍㅏㅐㅑㅒㅓㅔㅕㅖㅗㅛㅜㅠㅡㅣㅛㅕㅑㅗㅓㅏㅣㅠㅜㅡ",
            i = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ",
            f = "ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ",
            o = "ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ",
            d = 44032,
            t = (function (n) {
                for (var e = {}, i = 0; i < n.length; ++i) e[n[i]] = i;
                return e;
            })(n),
            r = (function (n) {
                for (var e = {}, i = 0; i < n.length; ++i) e[n[i]] = i;
                return e;
            })(e),
            x = {
                ㄱㅅ: "ㄳ",
                ㄴㅈ: "ㄵ",
                ㄴㅎ: "ㄶ",
                ㄹㄱ: "ㄺ",
                ㄹㅁ: "ㄻ",
                ㄹㅂ: "ㄼ",
                ㄹㅅ: "ㄽ",
                ㄹㅌ: "ㄾ",
                ㄹㅍ: "ㄿ",
                ㄹㅎ: "ㅀ",
                ㅂㅅ: "ㅄ",
            },
            O = {
                ㅗㅏ: "ㅘ",
                ㅗㅐ: "ㅙ",
                ㅗㅣ: "ㅚ",
                ㅜㅓ: "ㅝ",
                ㅜㅔ: "ㅞ",
                ㅜㅣ: "ㅟ",
                ㅡㅣ: "ㅢ",
            },
            u = function (n) {
                return r[n] >= 28;
            };

        var separateKor = function (n) {
            var t = n.charCodeAt();
            if (t >= d && t <= 55203) {
                var r = Math.floor((t - d) / 588),
                    x = Math.floor((t - d - 588 * r) / 28),
                    O = t - d - 588 * r - 28 * x - 1,
                    u = x,
                    a = -1,
                    l = O,
                    p = -1;
                return (
                    x == f.indexOf("ㅘ")
                        ? ((u = e.indexOf("ㅗ")), (a = e.indexOf("ㅏ")))
                        : x == f.indexOf("ㅙ")
                        ? ((u = e.indexOf("ㅗ")), (a = e.indexOf("ㅐ")))
                        : x == f.indexOf("ㅚ")
                            ? ((u = e.indexOf("ㅗ")), (a = e.indexOf("ㅣ")))
                            : x == f.indexOf("ㅝ")
                                ? ((u = e.indexOf("ㅜ")), (a = e.indexOf("ㅓ")))
                                : x == f.indexOf("ㅞ")
                                    ? ((u = e.indexOf("ㅜ")), (a = e.indexOf("ㅔ")))
                                    : x == f.indexOf("ㅟ")
                                        ? ((u = e.indexOf("ㅜ")), (a = e.indexOf("ㅣ")))
                                        : x == f.indexOf("ㅢ") &&
                                        ((u = e.indexOf("ㅡ")), (a = e.indexOf("ㅣ"))),
                        O == o.indexOf("ㄳ")
                            ? ((l = e.indexOf("ㄱ")), (p = e.indexOf("ㅅ")))
                            : O == o.indexOf("ㄵ")
                            ? ((l = e.indexOf("ㄴ")), (p = e.indexOf("ㅈ")))
                            : O == o.indexOf("ㄶ")
                                ? ((l = e.indexOf("ㄴ")), (p = e.indexOf("ㅎ")))
                                : O == o.indexOf("ㄺ")
                                    ? ((l = e.indexOf("ㄹ")), (p = e.indexOf("ㄱ")))
                                    : O == o.indexOf("ㄻ")
                                        ? ((l = e.indexOf("ㄹ")), (p = e.indexOf("ㅁ")))
                                        : O == o.indexOf("ㄼ")
                                            ? ((l = e.indexOf("ㄹ")), (p = e.indexOf("ㅂ")))
                                            : O == o.indexOf("ㄽ")
                                                ? ((l = e.indexOf("ㄹ")), (p = e.indexOf("ㅅ")))
                                                : O == o.indexOf("ㄾ")
                                                    ? ((l = e.indexOf("ㄹ")), (p = e.indexOf("ㅌ")))
                                                    : O == o.indexOf("ㄿ")
                                                        ? ((l = e.indexOf("ㄹ")), (p = e.indexOf("ㅍ")))
                                                        : O == o.indexOf("ㅀ")
                                                            ? ((l = e.indexOf("ㄹ")), (p = e.indexOf("ㅎ")))
                                                            : O == o.indexOf("ㅄ") &&
                                                            ((l = e.indexOf("ㅂ")), (p = e.indexOf("ㅅ"))),
                    -1 === a && (u = e.indexOf(f[x])),
                    -1 === p && (l = e.indexOf(o[O])),
                        [r, u, a, l, p]
                );
            }
            if (t >= 12593 && t <= 12643) {
                if (i.indexOf(n) > -1) return [(r = e.indexOf(n)), -1, -1, -1, -1];
                if (f.indexOf(n) > -1) {
                    (u = x = f.indexOf(n)), (a = -1);
                    return (
                        x == f.indexOf("ㅘ")
                            ? ((u = e.indexOf("ㅗ")), (a = e.indexOf("ㅏ")))
                            : x == f.indexOf("ㅙ")
                            ? ((u = e.indexOf("ㅗ")), (a = e.indexOf("ㅐ")))
                            : x == f.indexOf("ㅚ")
                                ? ((u = e.indexOf("ㅗ")), (a = e.indexOf("ㅣ")))
                                : x == f.indexOf("ㅝ")
                                    ? ((u = e.indexOf("ㅜ")), (a = e.indexOf("ㅓ")))
                                    : x == f.indexOf("ㅞ")
                                        ? ((u = e.indexOf("ㅜ")), (a = e.indexOf("ㅔ")))
                                        : x == f.indexOf("ㅟ")
                                            ? ((u = e.indexOf("ㅜ")), (a = e.indexOf("ㅣ")))
                                            : x == f.indexOf("ㅢ") &&
                                            ((u = e.indexOf("ㅡ")), (a = e.indexOf("ㅣ"))),
                        -1 === a && (u = e.indexOf(f[x])),
                            [-1, u, a, -1, -1]
                    );
                }
            }
            return [-1, -1, -1, -1, -1];
        };
        var ko2en = function (e) {
            var i = "";
            if ("" === e || void 0 === e) return i;
            for (var f = [-1, -1, -1, -1, -1], o = 0; o < e.length; o++) {
                var t = e[o],
                    r = t.charCodeAt();
                (r >= d && r <= 55203) || (r >= 12593 && r <= 12643)
                    ? (f = separateKor(t))
                    : ((i += t), (f = [-1, -1, -1, -1, -1]));
                for (var x = 0; x < f.length; x++) -1 !== f[x] && (i += n[f[x]]);
            }
            return i;
        };
        return ko2en(targetString);
    },
    mapKorToEng: function(strVal) {
        if ((strVal === '') || (!strVal) || (strVal === undefined)) {
            return;
        }
        var resultValue = '';
        for (let index = 0; index < strVal.length; index++) {
            if (this.isAlphanumeric(strVal[index])) {
                resultValue = resultValue.concat(strVal[index]);
            } else {
                resultValue = resultValue.concat(this.processKorToEng(strVal[index]));
            }
        }
        return resultValue;
    }
}