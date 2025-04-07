function FindProxyForURL(url, host) {
    // 大学ドメイン
    if (shExpMatch(host, "*.osaka-u.ac.jp")) {
        return "SOCKS5 localhost:12321";
    }

    // 一般的な論文誌・プレプリントサイトのホスト名パターン
    var proxyDomains = [
        "*.nature.com",
        "*.sciencemag.org",
        "*.ieee.org",
        "*.springer.com",
        "*.elsevier.com",
        "*.sciencedirect.com",
        "*.wiley.com",
        "*.tandfonline.com",
        "*.mdpi.com",
        "*.oup.com",
        "*.cambridge.org",
        "*.jstor.org",
        "*.aps.org",
        "*.acs.org",
        "*.rsc.org",
        "*.iop.org",
        "*.aip.org"
    ];

    for (var i = 0; i < proxyDomains.length; i++) {
        if (shExpMatch(host, proxyDomains[i])) {
            return "SOCKS5 localhost:12321";
        }
    }

    // その他のサイトは直接接続
    return "DIRECT";
}
