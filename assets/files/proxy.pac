function FindProxyForURL(url, host) {
    // 大学ドメイン
    if (shExpMatch(host, "*.osaka-u.ac.jp")) {
        return "SOCKS5 localhost:12321";
    }

    // 一般的な論文誌・プレプリントサイトのホスト名パターン
    var proxyDomains = [
        "*.nature.com",
        "*.sciencemag.org",
        "*.science.org",
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

    if (isInNet(host, "192.168.5.0", "255.255.255.0")) {
        return "SOCKS5 127.0.0.1:12321; DIRECT";
    }

    // その他のサイトは直接接続
    return "DIRECT";
}
