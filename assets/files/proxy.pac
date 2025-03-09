function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.osaka-u.ac.jp")) {
        return "SOCKS5 localhost:12321";
    }
    return "DIRECT";
}
