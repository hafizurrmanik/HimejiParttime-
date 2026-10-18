/* Himeji Arubaito Finder — data: Google Maps listings (Oct 2026)
   Row format: [name, phone, lat, lon, placeId, category, km from JR Himeji Station, km from Uomachi center] */
const RAW = [["7-Eleven Heart-In (inside JR ticket gate)","079-287-1925",34.8266977,134.6905342,"ChIJY632rxLgVDURSJ82GCBUPgQ","conv",0.01,0.66],["7-Eleven Heart-In (Station North Exit)","079-286-8272",34.8270771,134.6903743,"ChIJ80oytxLgVDURilQdgNyiuGw","conv",0.03,0.62],["PRONTO (Piole Himeji)","079-288-9064",34.8266085,134.6902496,"ChIJw_1OS23gVDURdRoKthGzpyo","cafe",0.03,0.66],["Maneki Dining (inside station)","079-282-5240",34.8266113,134.6907483,"ChIJYyqmpRLgVDURwr5b93wAIrA","jpn",0.03,0.68],["Himeji Sake & Oden (Piole)","079-284-6677",34.8264955,134.6905234,"ChIJzycpTW3gVDURaGCcMx37_Ks","jpn",0.03,0.68],["7-Eleven (Shinkansen gate side)","079-283-2700",34.8263806,134.6907913,"ChIJMYTpoRLgVDURbWlrNpCLXKc","conv",0.05,0.7],["Yoshinoya (inside JR Himeji Station)","079-286-9570",34.8270225,134.6909178,"ChIJ_YT9T23gVDUR8DZSoT405eM","fast",0.05,0.65],["Samurai Maneki Coffee (inside station)","",34.8265119,134.6900017,"ChIJL_GxKMPhVDURNtHo6hq8nu4","cafe",0.06,0.66],["Matsumoto Kiyoshi Piole Himeji","079-226-2720",34.8270095,134.6911091,"ChIJffxotd_hVDURTZNORSHHNqU","super",0.06,0.66],["Piole Himeji (shopping mall)","079-226-0123",34.8272897,134.6908144,"ChIJlZh2Mm3gVDURCnxmDiRKB_A","retail",0.06,0.62],["UNIQLO Piole Himeji","050-3098-0081",34.8273884,134.6904761,"ChIJAaH6oRLgVDUR5udygAxxEYc","retail",0.07,0.59],["Oraga Soba (Piole Himeji 1F)","079-283-0302",34.826497,134.6898519,"ChIJ8f6DNm3gVDURYv3RrQtYh4w","jpn",0.07,0.66],["Hands Himeji (Piole 5F)","079-223-5001",34.827331,134.6910473,"ChIJQ-eUvBLgVDURKdzC-J1pvK0","retail",0.08,0.62],["Starbucks Coffee Piole Himeji 4F","079-223-4010",34.827331,134.6910473,"ChIJoTOmpRLgVDUR6u9UW_FQ_qo","cafe",0.08,0.62],["bibim' Piole Himeji (Korean)","079-223-0041",34.8274502,134.6907669,"ChIJoTOmpRLgVDUR0M1HtBUaZmk","world",0.08,0.6],["Pantry Himeji (Piole 1F)","079-226-2760",34.8268898,134.6914249,"ChIJbULkJm3gVDUR3b1gE7lLjac","super",0.09,0.68],["Junsei Cream Cafe H (crepes)","070-8954-5822",34.8277767,134.6908959,"ChIJVWHu8D3hVDURbHvMqRR6t6U","cafe",0.11,0.58],["McDonald's (Piole Gochiso-kan, by station)","079-226-2884",34.8269224,134.6918867,"ChIJbULkJm3gVDUR5nYny7td9L8","fast",0.13,0.71],["KFC (Piole Gochiso-kan, by station)","079-226-2666",34.8268344,134.6918727,"ChIJ4aVPpcnhVDURZVS3SsaqoXc","fast",0.13,0.71],["Starbucks Coffee Piole Himeji 1F","079-226-6505",34.8271489,134.6891726,"ChIJyXmKzhLgVDUROM8qlsCx0VU","cafe",0.13,0.57],["Ramen Kintora (Viera Himeji)","079-226-3111",34.8263318,134.6918239,"ChIJucCjjWDhVDUR0V6YPF5E4Wo","ramen",0.13,0.76],["Ramen Kyo (Piole Himeji)","079-287-8385",34.8264153,134.689133,"ChIJsak4XgDhVDURm38rq362Auc","ramen",0.13,0.64],["Daily Yamazaki (JR Himeji East Exit)","079-283-3839",34.8261775,134.6917778,"ChIJ_YzhSA3gVDURMZk_WVuwIVM","conv",0.14,0.77],["Gusto Himeji Ekimae","0570-022-451",34.8280505,134.6908974,"ChIJBcB9gxLgVDURvLzRk4C1pEc","family",0.14,0.55],["Saizeriya (Grand Festa, Ekimae)","079-287-1380",34.8276753,134.6916796,"ChIJoTOmpRLgVDURhnD-POAjo-U","family",0.15,0.63],["Gyoho Shiosai (Viera Himeji)","079-222-8833",34.8260991,134.6919488,"ChIJRciSvljhVDURQdLkuFh__a0","izakaya",0.15,0.78],["FamilyMart Himeji Station South","079-286-8681",34.8253952,134.6909922,"ChIJizbRXm3gVDURbqCFJ1pjIp0","conv",0.16,0.81],["Rikimaru Kaiten Sushi (Piole)","079-287-2727",34.8272851,134.6887958,"ChIJIXJ-S23gVDUR6Grq9aRZRWg","family",0.16,0.54],["Kuranosuke Himeji Ekimae","079-262-6995",34.8279405,134.6916301,"ChIJITOOBg7hVDURJy26uIoYb6Y","izakaya",0.16,0.6],["Matsumoto Kiyoshi Himeji Station","079-288-1161",34.82799,134.6915579,"ChIJE1lKQBDhVDURIq9pbfL8a_k","super",0.16,0.59],["GU Piole Himeji","050-3096-7547",34.8272335,134.6888741,"ChIJXwiIjHLgVDURuO4rnL_m4Ro","retail",0.16,0.55],["Karaoke Manekineko Himeji Ekimae","079-280-6980",34.8282024,134.6909449,"ChIJ_eaPBw_hVDURg3tceGXXo2g","fun",0.16,0.54],["Marujo Suisan (seafood, Festa Bldg)","079-222-0158",34.8281754,134.6909545,"ChIJ4c59gxLgVDURS8Zu0mNQjtk","jpn",0.16,0.54],["Bansankan Souvenir Store","079-289-2835",34.82617,134.688761,"ChIJ8VnZ32zgVDURn6z1zq3xXA8","retail",0.17,0.66],["Lawson Himeji Ekimae","079-280-6607",34.8282744,134.6907986,"ChIJbViMKgDhVDURt3TKUbEgkKc","conv",0.17,0.53],["7-Eleven Minami-ekimae-cho","079-222-0056",34.8254488,134.6893998,"ChIJR5FwGW3gVDURrGgfk6Q0l3M","conv",0.18,0.75],["Lawson Hotel Monterey Himeji","079-288-7721",34.8271008,134.6924524,"ChIJN_qQmg3gVDURVM-hqNbI_Kc","conv",0.18,0.72],["Torikizoku Himeji Ekimae No.2","079-282-1528",34.8260596,134.6922573,"ChIJYW9ZSA3gVDURZtka_8eHg_0","izakaya",0.18,0.8],["Torikizoku Himeji Ekimae No.3","079-280-5528",34.827987,134.6918675,"ChIJwY9inQ3gVDUR81tDGSBaudQ","izakaya",0.18,0.61],["Toriichizu Himeji (Taishu Tori Sakaba)","079-240-8334",34.827987,134.6918675,"ChIJu0tXSgDhVDURV3oKcxSrXYc","izakaya",0.18,0.61],["Doutor Coffee (Ekimae)","079-226-5330",34.8282019,134.6914938,"ChIJq6qqqg3gVDURyl4SNCbZ_FY","cafe",0.18,0.57],["Manneken Sanyo Himeji (waffles)","079-226-0866",34.8284358,134.6902339,"ChIJ64Cl8xLgVDURZSYhxv-Jd74","cafe",0.18,0.48],["Jankara Himeji Miyukidori","080-6213-5325",34.8282491,134.6912634,"ChIJ8z3lfw3gVDURd78SA07kMao","fun",0.18,0.55],["Hotel Nikko Himeji","079-222-2231",34.8252844,134.6899812,"ChIJIax94jZfVDURfdDkbrXsjhg","hotel",0.18,0.79],["Jigoro Kohiro (Himeji oden)","079-285-3305",34.827977,134.6918501,"ChIJhSuOnQ3gVDURhW1sd7dUinA","jpn",0.18,0.61],["Torikatsu","079-224-5753",34.8251051,134.6909883,"ChIJhUjKYG3gVDURxtVySZwIKd0","izakaya",0.19,0.84],["Fukutori Ekimae","079-282-5234",34.828139,134.6918162,"ChIJxbJylg3gVDURVi5fcvfEon4","izakaya",0.19,0.6],["Toriyuki (Miyuki-dori yakitori)","079-280-7451",34.8282176,134.6916539,"ChIJ2YHJaADhVDURUeOWb3OKVg8","izakaya",0.19,0.58],["Taishu Yukari Shokudo (Grand Festa B1)","079-280-3969",34.8279163,134.6920442,"ChIJh-PE4N7hVDURcxZ3Wumyv9Y","jpn",0.19,0.63],["Karakara Himeji (noodles & izakaya)","079-280-2636",34.8281992,134.691706,"ChIJH8G8a07hVDURO973mCQo1NU","ramen",0.19,0.59],["Kensington (cafe & bar)","079-285-1051",34.8285609,134.6909006,"ChIJxYlPfhLgVDURPvMuJT8vUfI","cafe",0.2,0.51],["Sugi Drug (Hotel Monterey 2F)","079-280-6231",34.827389,134.6925822,"ChIJX6LvDQ3gVDURNjmfpwWZ6uk","super",0.2,0.71],["Hotel Monterey Himeji","079-224-7111",34.8273266,134.6925827,"ChIJl1DIDA3gVDURC0qsG89_Ko8","hotel",0.2,0.71],["Bonanza (okonomiyaki)","079-281-1182",34.828566,134.690952,"ChIJxYlPfhLgVDURZklJ7YIR1ZU","jpn",0.2,0.51],["Totoro (standing sushi bar)","079-280-6839",34.8260201,134.6925022,"ChIJ78nHNw3gVDURkv1ll0TN6pI","jpn",0.2,0.82],["Yakiniku Uramatsu","079-287-8551",34.828471,134.691387,"ChIJK5qfM7_hVDURxUthYeHsuvs","yaki",0.2,0.54],["Dining Mew's Bar","079-288-7722",34.8285262,134.689539,"ChIJ6ZkB-hPgVDURTAy7zu6gweM","bars",0.21,0.44],["Vietnam Bussan Amily (Asian grocery)","080-4268-7242",34.8283543,134.6891774,"ChIJIVDRnAfhVDURhgeHgOvl1_M","super",0.21,0.44],["Kakureya Izakaya Mogura (Ekimae)","080-7197-2205",34.8281545,134.6921167,"ChIJueUjljXhVDURXTZYYwSVKTc","izakaya",0.21,0.62],["JOYSOUND Himeji Ekimae","079-256-0301",34.8284589,134.6916489,"ChIJJ3qIhA3gVDURhV-bzPLWinQ","fun",0.21,0.56],["Himeji Tanmen","079-280-2322",34.828136,134.6921297,"ChIJVVUhnA3gVDURWwk0xjRrWVk","ramen",0.21,0.62],["Matsuba Sushi","079-224-1552",34.828434,134.691852,"ChIJAZg4mw3gVDURliaH4croOkw","jpn",0.22,0.58],["Neboke Sushi","079-282-2033",34.8284422,134.6918907,"ChIJmTsU40bhVDURNfqyasbPBek","jpn",0.22,0.58],["Torimaru Omizoji","079-287-2267",34.8283871,134.6923427,"ChIJY7lMvQ3gVDUR8vJ2LZ6d--k","izakaya",0.24,0.61],["Kitchen House (izakaya)","079-287-6789",34.828274,134.6885615,"ChIJMzyaIxPgVDURNjtxq3Tk2uE","izakaya",0.24,0.43],["YOGI (Korean)","079-287-8346",34.8280621,134.6884027,"ChIJmyrURgDhVDUROwTloZB3-aw","world",0.24,0.45],["7-Eleven Higashi-ekimae-cho","079-281-7881",34.828414,134.692438,"ChIJx7j7vA3gVDURTH7AhteuQiw","conv",0.25,0.62],["FamilyMart Sanyo Himeji Station","079-286-5351",34.8287387,134.6891497,"ChIJAVvDsXLgVDURGp4o6FWdy8s","conv",0.25,0.4],["Oyahinaya Himeji Ekimae","079-280-8657",34.8287207,134.6923312,"ChIJTUUMXQDhVDURR19tANJOHcY","izakaya",0.27,0.59],["Mikohachiya","079-283-0358",34.828784,134.6922547,"ChIJFbM44B3hVDURz1aKr1fdXec","izakaya",0.27,0.58],["AREUM BAGEL Himeji","",34.8291832,134.69119,"ChIJv6ciEtHhVDURGVWWrcWQva8","cafe",0.27,0.48],["Bon Marche Himeji","079-288-0007",34.8291359,134.6896498,"ChIJiXaNWBLgVDUR4eR2xuBmOBg","super",0.27,0.39],["Karaoke Manekineko Miyukidori","079-280-7760",34.8291264,134.691463,"ChIJ8V1lvbjhVDURQxxyK611_Cw","fun",0.27,0.5],["DAISO (Bon Marche 2F)","",34.8291683,134.6895588,"ChIJBVyKWBLgVDUR0avpLDfr3y0","retail",0.28,0.38],["Nanpu (okonomiyaki & doroyaki)","079-280-3411",34.8286888,134.6925182,"ChIJ9eP1jw3gVDURQq5N2_FR2MQ","jpn",0.28,0.6],["Shinseiken (ramen & gyoza)","079-222-5439",34.8293098,134.690513,"ChIJESI-bxLgVDUR_RGYa_ks1mo","ramen",0.28,0.42],["Eiyoken (Chinese / gyoza)","079-288-3055",34.8288416,134.6923127,"ChIJ6bJAlQ3gVDUR4whVCvudQjA","world",0.28,0.58],["Shokusaiya Usagi Machinaka (Ekimae)","050-5484-1875",34.829452,134.690509,"ChIJpU9qbhLgVDURZKVA7zkM5wc","izakaya",0.29,0.41],["Dashi to Osake Gen (Himeji Ekimae)","079-240-6339",34.8294371,134.6905038,"ChIJZfwmYQDhVDURE9o3wCUWuwU","izakaya",0.29,0.41],["Himeji Uden (udon + oden)","080-3822-7399",34.8259166,134.6875567,"ChIJlYNPbwDhVDURzCBqd57uaec","jpn",0.29,0.68],["Yakiniku Bowl 29-chome","079-289-5929",34.828754,134.6926752,"ChIJqWUEbOHhVDURLYpTiCuKrJw","yaki",0.29,0.61],["KOKADOYA Cocktail Club","079-280-3330",34.8291306,134.6921618,"ChIJUS-QmGrhVDURZDCS8qtoJZM","bars",0.3,0.55],["LUANA Hawaiian Cafe (Terasso 4F)","079-263-7585",34.8273519,134.6937203,"ChIJ5a5ejwfhVDURyjEiGlvHQV8","cafe",0.3,0.78],["Shimamura Terasso Himeji","079-286-5551",34.8272498,134.6936874,"ChIJvYTrVgzgVDURrx-wWzdfgKA","retail",0.3,0.79],["Jankara Himeji Ekimae","080-6202-7485",34.8291883,134.6919241,"ChIJ__87yBLgVDUR4kvf6k8KATQ","fun",0.3,0.53],["Ootoya (Terasso Himeji 4F)","079-240-7311",34.8273519,134.6937203,"ChIJDcG3VQzgVDURe6QoBf69JjQ","jpn",0.3,0.78],["8-ban Ramen Kanazawa (Himeji Ekimae)","079-263-8862",34.8291724,134.6920056,"ChIJoVDCd3bhVDURH52zsb5vNVM","ramen",0.3,0.54],["Asian Dining Khadka Place (Nepali / Indian)","079-222-3322",34.8291769,134.692006,"ChIJnbdjEbrhVDUReNd-2v9L0Ps","world",0.3,0.53],["Italian Dining Ricordo (Terasso 4F)","079-282-7700",34.8273519,134.6937203,"ChIJE61J4IPhVDURiaCOIbF-TGA","world",0.3,0.78],["Jokamachi Sakaba Tanukichi","079-287-8644",34.8294533,134.689416,"ChIJKfA5UyXhVDUR6HHau4jTdTs","izakaya",0.31,0.35],["Gyoza no Kacchan Himeji","080-4272-1125",34.8295521,134.6899502,"ChIJlZLhfgrhVDURYPCz5vVVUI8","izakaya",0.31,0.37],["Marumasa Tempura Restaurant","079-280-1128",34.8294794,134.6894257,"ChIJyzaQWRLgVDURFBvNUskmZcE","jpn",0.31,0.34],["Yakiniku Twilight Donden","090-3727-4814",34.8291811,134.6922263,"ChIJp44ZbgDhVDUR7EJVH1zP57c","yaki",0.31,0.55],["Sebastian DINING (Italian, Smile Bldg 7F)","079-281-1009",34.8295763,134.68992,"ChIJjfDYQhLgVDURRrXhKukrfOI","world",0.31,0.36],["FamilyMart (Fukutomi Bldg, Ekimae)","079-225-7871",34.8295404,134.6917163,"ChIJu1B6OQDhVDURokbGwt9VQ0o","conv",0.32,0.49],["MaxValu Terasso Himeji","079-288-2278",34.8273907,134.6939204,"ChIJO5eZVgzgVDURcBuM29ByXKQ","super",0.32,0.8],["BAR963 KrazyWhisky","090-9980-0963",34.8297738,134.6902759,"ChIJ87zGHxfhVDURJ5blWMvYyJc","bars",0.33,0.37],["Hotel LiveMax Himeji Ekimae","079-282-4400",34.8294053,134.6888118,"ChIJ-8NGABPgVDUR8jhg4ne2xLI","hotel",0.33,0.32],["Matsuya Ekimae","080-5928-0614",34.829667,134.691419,"ChIJxy-HU7_hVDURTAS6pnXLfSE","fast",0.33,0.46],["Komeda's Coffee Himeji Ekimae","079-285-0024",34.8296351,134.6914101,"ChIJFYF0ohnhVDUROapboZvMVk4","cafe",0.33,0.46],["Hinoya Curry Himeji Miyuki-dori","079-287-8879",34.8297495,134.6916484,"ChIJG4z_y4HhVDURLILocYszqeo","world",0.34,0.47],["Showa Retro BAR YSP","080-8313-4874",34.8296185,134.688897,"ChIJAx6BWzzhVDURd-DnA-dihug","bars",0.35,0.3],["Thai Duong Mart 74 Himeji (Asian grocery)","",34.8294278,134.6884524,"ChIJiVM9JgDhVDURP3J5NdisKco","super",0.35,0.31],["Matsumoto Kiyoshi Miyuki Street","079-222-0037",34.829692,134.6920072,"ChIJteG7dP3hVDURqQF7mIeFKnY","super",0.35,0.5],["Oideya Momo (izakaya)","070-8581-8736",34.8293029,134.6880252,"ChIJ2QioOhjhVDURkz-Owqn1p5A","izakaya",0.36,0.31],["DAISO Out River (Kameimachi)","",34.8299497,134.6917768,"ChIJRW4M-w3gVDUR5edQkFZ5d4s","retail",0.37,0.47],["BRISK STAND HIMEJI (burgers)","079-287-9988",34.8301598,134.6907545,"ChIJL0SVGQDhVDURb1FCTw2hG4E","yaki",0.37,0.38],["Grazie Himeji (pizza)","050-5494-7561",34.8289222,134.6873859,"ChIJ36Qwt1vhVDURNsqcDxzTqoA","world",0.37,0.34],["BeerPub harvest","080-1415-5747",34.8300463,134.6891197,"ChIJw9wRhNHhVDURkvjoxk2pWtM","bars",0.38,0.28],["APA Hotel Himeji Station North","079-284-4111",34.8292578,134.6933977,"ChIJv3eP0w3gVDURJryj-3ogaZs","hotel",0.38,0.64],["SnackBar Hime","070-6502-1906",34.8301332,134.6889107,"ChIJwxT6irvhVDURBgqzaDRwNyY","bars",0.4,0.26],["Yojohanten (Chinese)","080-9833-0012",34.8304197,134.6904179,"ChIJ96mLuznhVDURt4alIwdHggg","world",0.4,0.34],["SHISHAbar CHILL OUT","",34.8305005,134.6899657,"ChIJ-WQGOZXhVDURKyIQh1t9KbM","bars",0.41,0.3],["THE BAR INTERPLAY","079-258-7629",34.8304987,134.6899449,"ChIJJS_Ji5vhVDURLCYa2QDD6yo","bars",0.41,0.3],["Majimeya Himeji Miyukidori","079-288-1728",34.8303226,134.6921112,"ChIJ_7Yit5rhVDURWf4foJdAHg4","izakaya",0.42,0.48],["Abura Soba MAZEMARU","",34.8292999,134.6870073,"ChIJueYKcgDhVDUR68V9pxB46eU","ramen",0.42,0.3],["Bishnu (Nepali / Indian)","079-224-8577",34.8303144,134.6922789,"ChIJu3OK0D7hVDURlqQdq-ahC74","world",0.42,0.49],["Lawson Toyozawa-cho","079-225-3940",34.8230813,134.6883287,"ChIJISKogm7gVDUR0tJBmskmQhw","conv",0.46,1.0],["Comfort Hotel Himeji","079-286-8511",34.8284662,134.6950693,"ChIJFeH7GwzgVDURYdsWKrGUgTI","hotel",0.46,0.81],["Kohoseki (Chinese)","079-288-0459",34.8296925,134.6940915,"ChIJd4BPhQ7gVDURCdclABl5GaI","world",0.46,0.67],["SOUQ (whole-building rental inn)","090-4703-2590",34.8293987,134.6864633,"ChIJp_1fNADhVDURhG3hmRYNy8U","hotel",0.47,0.3],["Himejien (clothing & gifts)","079-287-8483",34.8309447,134.6916806,"ChIJp_bp81ThVDURWyj8sufhQ_E","retail",0.47,0.42],["Doutor Coffee (Gofuku-machi)","079-224-3383",34.8308845,134.6921575,"ChIJjbfkEw7gVDURbAdDpKhyrUI","cafe",0.48,0.46],["Yaemon (soba & tempura)","079-281-9555",34.8305956,134.693056,"ChIJpf_2Zg7gVDURBzkKBXshV1Y","jpn",0.48,0.55],["Ramen Nakayama","079-280-6371",34.8310791,134.690613,"ChIJC737EdThVDUR4M0EXKHO_i8","ramen",0.48,0.32],["Nagahama Shoten (Nagahama Ramen)","079-280-3599",34.8305991,134.6929203,"ChIJiVDJ6aThVDURazqrdFGRPUU","ramen",0.48,0.54],["Hotel First Himeji","079-283-5963",34.8304101,134.6874343,"ChIJz2TYpgThVDURO8oL1rAay38","hotel",0.49,0.18],["Medical Home Grand Harima Himeji","0120-171-165",34.826997,134.695825,"ChIJ0Xx5HwDhVDURwzGZqSnzplM","care",0.49,0.96],["Amimala Tang Himeji (Mala-tang)","079-263-8865",34.8310006,134.6921664,"ChIJRd32JADhVDURkTi1X_HE58Q","world",0.49,0.46],["TAQWA Halal Kitchen & Mart","080-3766-3260",34.8309988,134.6920685,"ChIJz2o5GwDhVDURcmosVjHarHk","world",0.49,0.45],["NHAU 99 Himeji (Vietnamese)","080-5965-6301",34.8308236,134.6928792,"ChIJUavGDsfhVDURRwxt7bDB3u4","world",0.5,0.53],["Okonomiyaki Teppan Izakaya Kukufuku","050-8885-9973",34.8301823,134.6869373,"ChIJKeZr-2ThVDURfEFhGr4aCPI","jpn",0.5,0.21],["Italian Dining grigio","079-280-8056",34.8307269,134.6932038,"ChIJFZl7qI_hVDUR7U6A_bAQYrs","world",0.5,0.56],["il riccio (vegan cafe)","079-288-2439",34.8308295,134.6932365,"ChIJqdKWjUzhVDURFa_oy20OEwI","cafe",0.51,0.56],["Lawson Gofuku-machi","079-280-3303",34.8311713,134.6922242,"ChIJ97GgHBXhVDURAr6ZYn4LWNM","conv",0.51,0.46],["Himeji Ramen Oboro","090-4620-6213",34.8312233,134.6891153,"ChIJe-vsQWDhVDURxoyFlss7oqo","ramen",0.51,0.19],["Stamina Yakiniku Marumasa (Crystal Yokocho)","079-280-4584",34.8312233,134.6891153,"ChIJrcopp7PhVDURAIi7rBURMQg","yaki",0.51,0.19],["FamilyMart Himeji Otemae","079-226-5388",34.8314447,134.6912019,"ChIJXbWb4RHgVDURQNoGdnOqQhI","conv",0.52,0.36],["convert (cafe)","",34.8287613,134.6853871,"ChIJm9u7OQDhVDURX8C_k1nKca0","cafe",0.52,0.4],["Izakaya Hajime","079-287-8181",34.8316094,134.6902036,"ChIJZwuTkRjhVDURMze4nJlBlok","izakaya",0.54,0.27],["7-Eleven Himeji Shiomachi","079-222-3757",34.8310001,134.6876393,"ChIJB9SmlRPgVDURa1TeJZjJvFY","conv",0.54,0.12],["Ekisoba","079-283-2208",34.8316065,134.69119,"ChIJ___v_BHgVDURJsEa5d6TQkU","jpn",0.54,0.36],["Teppanyaki Usagi (okonomiyaki)","",34.8219527,134.6906465,"ChIJi53i_G3gVDUR0nNVdICbUKk","jpn",0.54,1.16],["Hamamoto Coffee (kissaten)","079-282-2233",34.8314336,134.6924679,"ChIJT0LpRg7gVDURsc67nH_nVXU","cafe",0.55,0.48],["RAMEN Koba & More","",34.8312109,134.6931442,"ChIJAfQdWw7gVDUR936No1NbwF4","ramen",0.55,0.54],["Aivory Lounge","080-1434-4660",34.8316312,134.6887054,"ChIJWwIh1VHhVDURjrRWZXxWp60","bars",0.56,0.14],["Kamakura Japanese Sweets (Miyuki-dori)","079-224-0888",34.8316756,134.6925604,"ChIJ66qWQS7hVDURv67y3V98wDo","cafe",0.57,0.48],["Yumemiduki Himeji Uomachi (robatayaki)","079-282-8815",34.8317233,134.6885608,"ChIJddE5ShThVDURaRnSmB7C6ts","izakaya",0.58,0.12],["Uomachi Franceitei (French)","090-8394-2139",34.8317254,134.6884161,"ChIJnSX1jCjhVDUR8LEl751bjW8","world",0.58,0.11],["Cafe Wacca","079-223-3956",34.8316676,134.6927627,"ChIJLfgZWxXhVDURd9Omg7mWUPM","cafe",0.58,0.5],["Kimono Hotel Himeji","090-8233-4217",34.8319886,134.6906374,"ChIJw2oTNfXhVDURTto8ppdnKrI","hotel",0.58,0.31],["UTAKATA HOTEL HIMEJI","080-1412-4614",34.8312221,134.693922,"ChIJ5dShUXvhVDURaWMqXOB6foE","hotel",0.58,0.61],["Kohma (tableware shop)","079-281-3500",34.8316551,134.6927365,"ChIJby1UTw7gVDURdGs3RciYtdA","retail",0.58,0.5],["Mito (sushi)","079-287-3600",34.8319042,134.6891968,"ChIJ2-z0SQDhVDUR5Om0_s8kD0k","jpn",0.58,0.18],["Kyuryo Chinese Restaurant","079-263-7934",34.8320225,134.6903798,"ChIJ78NtfrPhVDURw2YHI_apLNs","world",0.58,0.28],["Baby Bamboo Snack Bar","090-9877-7868",34.8315406,134.6875885,"ChIJhebonKrhVDURl6rrXrR-4Ak","bars",0.59,0.06],["Inoue (tonkatsu)","079-288-1830",34.8321119,134.6910215,"ChIJF_vmvYLhVDURkZAO1rD3Me8","jpn",0.59,0.34],["Towa (Korean)","070-3666-8088",34.831538,134.6875869,"ChIJmS-z-IrhVDURayd3tLnZJI8","world",0.59,0.06],["Fujun Kissa Hiiro (cafe & bar)","079-280-9605",34.8318415,134.6880652,"ChIJsbSjsR3hVDURy5UkmdlnS18","bars",0.6,0.08],["Robust Co-working & Cafe","079-280-7003",34.8317052,134.6932492,"ChIJAQAkDQzgVDURWSzvFZS9J1A","cafe",0.6,0.55],["Lawson Himeji Uomachi Higashi","079-283-1070",34.8319866,134.6887241,"ChIJJXnZfhHgVDURVlJzqP-kVB0","conv",0.6,0.13],["Jagapan (bakery)","079-287-6667",34.8214406,134.6905474,"ChIJcdMwF8HhVDURFHYW08kl1q0","cafe",0.6,1.21],["ReHOPE Himeji","079-280-6871",34.8245644,134.684521,"ChIJGeJPi3zhVDURKjGpimt1iro","care",0.6,0.86],["Wish (bar)","079-280-6419",34.83178,134.68758,"ChIJgVK35xPgVDURFH7jEf-M_iw","bars",0.61,0.04],["Musashi (tonkatsu)","079-282-6257",34.8321125,134.6920653,"ChIJ4xohNw7gVDUR8PYK7fQWGeo","jpn",0.61,0.44],["Bar Monet","",34.8316697,134.6872843,"ChIJMQq2G8zhVDURu378uYikRqc","bars",0.62,0.04],["BAR Storm","090-6677-7310",34.8317037,134.6872109,"ChIJf3lLsSLhVDURl4uqKf_eTQY","bars",0.62,0.03],["Grace Philippine Snack Bar","079-289-5085",34.8318886,134.687596,"ChIJET6-fU7hVDURH1fXcqoqlVg","bars",0.62,0.03],["Bon Marche Otemae","079-288-0770",34.832208,134.6925816,"ChIJY9msyg_gVDUR95PbLpbZ36s","super",0.63,0.49],["Night In Oz (snack bar)","079-281-3904",34.8319387,134.6873077,"ChIJo2m75RPgVDURHOI6cckpBbA","bars",0.64,0.01],["Bar LEON Himeji","079-263-7753",34.8322044,134.6881095,"ChIJf5MNKh_hVDURLjk6Z7k4B9o","bars",0.64,0.08],["FamilyMart Shiomachi","079-226-2020",34.8315494,134.6866241,"ChIJTWTvvQ4gVTURm3YGPU11byM","conv",0.64,0.08],["Member's ALICE (lounge)","079-280-7828",34.8321374,134.687696,"ChIJL5S3yv7hVDURU4C8sSD0g58","bars",0.65,0.04],["Lounge Esperoir","090-6558-0231",34.8320193,134.6870164,"ChIJVfPCI63hVDURlFOZXwcIHKE","bars",0.66,0.02],["Lawson Nounen-cho","079-225-6555",34.8277338,134.6834077,"ChIJ2ZUOfGzgVDURjiQbqWNztBU","conv",0.66,0.59],["SMASH CAFE","079-289-5491",34.8321034,134.6937387,"ChIJVVVJBg_gVDURlLJODbfOTq0","cafe",0.66,0.59],["Yeongwon (Korean)","",34.8314958,134.6858356,"ChIJJ5ckWcrhVDURFf0g28qIuUY","world",0.67,0.14],["KOKO HOTEL Himeji","079-287-2111",34.832343,134.693734,"ChIJKRUBCQ_gVDURSH55eDHDvh4","hotel",0.68,0.59],["Vintage Art Boutique Himeji","",34.8329937,134.6914834,"ChIJFQio2E3hVDUR4UV0SVTkFag","retail",0.69,0.4],["AEON Town Himeji (mall)","079-281-0609",34.8253613,134.6827612,"ChIJTQJN9GngVDURrUZPYMq2fOc","retail",0.72,0.85],["DAISO AEON Town Himeji","",34.8251539,134.6828234,"ChIJizJY9WngVDUR17meie7ungQ","retail",0.72,0.86],["LAST ONE HIMEJI (craft beer bar)","079-255-9957",34.8334662,134.6913066,"ChIJhztKPwDhVDURUZRmvfrVC50","bars",0.74,0.4],["Watamachi Cafe","090-6669-6192",34.8323618,134.694933,"ChIJl_vr6vfhVDURhhan48UlGtE","cafe",0.74,0.7],["Niku to Sakana no Kakurega YAMATO","070-7585-0107",34.8333954,134.6918565,"ChIJxe6B0k7hVDURkx26iF2OfJI","jpn",0.74,0.45],["Amipara AEON Town Himeji (arcade)","079-280-6031",34.8253287,134.6825317,"ChIJ8fxHWgDhVDURPhrRgB5q6Ic","fun",0.75,0.86],["Nepali Indian Cuisine DARBAR","079-280-8009",34.8334249,134.6918876,"ChIJUzZEHj7hVDURA-R99PJes8I","world",0.75,0.45],["FACE SNACK BAR","080-6160-0944",34.8323439,134.6856585,"ChIJ_eLtIQDhVDURRziDN6N7C6M","bars",0.76,0.15],["Ice wa Betsubara (ice cream)","050-8881-7717",34.8333547,134.693008,"ChIJw22Y_ybhVDURGmy1tqpIOTw","cafe",0.76,0.55],["McDonald's Himeji Yasuda","079-283-1634",34.8204646,134.6869906,"ChIJW49wekzhVDURmKfBPyDoKC8","fast",0.77,1.28],["Sushiro Himeji Hojo-miyano-machi","079-287-1972",34.8201374,134.6927075,"ChIJlYgjlHHgVDURg64VsMRFtEw","family",0.77,1.41],["Menme (handmade udon)","079-225-0118",34.8336578,134.6919567,"ChIJ5fkA6wTgVDUR-zBtg5Sf8K4","jpn",0.77,0.47],["Kanbei (okonomiyaki)","079-256-0892",34.8334228,134.69301,"ChIJ5fkA6wTgVDUR89s3ionFAgE","jpn",0.77,0.55],["VinVin Curry","090-5364-5609",34.8335482,134.6924766,"ChIJg_u6c8nhVDURid-mg7KgV8E","world",0.77,0.51],["Lawson Konikai-machi","079-280-8848",34.8299876,134.6982817,"ChIJJ6GpqCPhVDURhf4zGSGvsoo","conv",0.79,1.03],["Uobei (AEON Town Himeji)","079-281-7711",34.8252588,134.6819582,"ChIJs10W9WngVDUR0xoyrVCv57I","family",0.8,0.89],["Obanzai Osaiya (home-style lunch)","080-5322-4066",34.83395,134.690677,"ChIJyZHaS2DhVDURNqsos9QiV9g","jpn",0.8,0.38],["Lamp Bakery","",34.8340432,134.6919713,"ChIJ5fkA6wTgVDURBEx9v33yAa8","cafe",0.82,0.49],["Coffee Shop 5W2H","",34.8342299,134.6915875,"ChIJW2lo_e7hVDURXXpKK3xvQqQ","cafe",0.83,0.47],["Grill Tempei (western)","079-280-4697",34.834032,134.6928318,"ChIJkV2PiA_gVDURczcuoHroP_I","yaki",0.83,0.56],["Himejien Castle-town store","079-240-8773",34.8342155,134.692105,"ChIJAyxdXTLhVDURtjl_Jxtjhjk","retail",0.84,0.51],["Sugi Drug Kamiya-cho","079-262-6371",34.8282942,134.6995341,"ChIJZzyZLP3fVDURyOGLDyUsBMM","super",0.84,1.19],["Carenex Self Stage New Himeji","079-286-8838",34.8254992,134.6814695,"ChIJ9Z5hDkLgVDURsTtoUz1IFrs","gas",0.84,0.9],["Sushi Ichi","079-222-6961",34.8335607,134.6864152,"ChIJ-wwbsxbgVDUR5XHsCZktOmI","jpn",0.84,0.19],["Himeji Castle Shiro Pudding","079-241-0845",34.8342866,134.6921444,"ChIJMdnlro_hVDURVNZXiKM53a0","cafe",0.85,0.51],["Kushiyaki Kobe Beef (near castle)","079-280-3880",34.8348304,134.692451,"ChIJefXaXQXgVDURMFxaHixlJGw","yaki",0.91,0.57],["Kikka Malatang Himeji (Chinese)","080-5301-5588",34.8341472,134.6856526,"ChIJ9ReGthnhVDURMS5tLQ4II1U","world",0.93,0.28],["ENEOS Himeji Hirano-machi","079-224-0451",34.8323126,134.698369,"ChIJgSxszQfgVDURVjohmhQh2Bs","gas",0.94,1.01],["WA!DINING MANEKI Himeji Castle","079-287-8262",34.8353333,134.6922778,"ChIJt1fvBADhVDURt-dgYK37myk","jpn",0.96,0.59],["Takata-no-baba (near castle)","079-222-2505",34.8355162,134.691956,"ChIJ5fkA6wTgVDURUbTTWxakd2o","jpn",0.98,0.58],["Gozasoro (Head Office & Factory, Abo)","079-282-2311",34.8247672,134.7014652,"ChIJA-n0xOHfVDURd_Wu23jcF1U","factory",1.03,1.53],["Burg no Na ni Kakete (hamburger steak)","090-2357-8778",34.8342984,134.6970847,"ChIJh6VaOmPhVDURPiD9jrpgyPQ","yaki",1.03,0.93],["Yonezawa (kamameshi / kaiseki)","079-284-3553",34.818299,134.6841124,"ChIJjbpBAGfgVDURjPFbg-JR0VU","jpn",1.11,1.55],["Matsuya Yasuda","080-5928-1122",34.817307,134.684755,"ChIJFY2L5WbgVDURNCNryQ2eNDc","fast",1.18,1.65],["McDonald's Hanakage-cho","079-299-2270",34.832301,134.6791823,"ChIJp5S8dT_gVDURG_eKHY623Dk","fast",1.2,0.74],["Mitsubishi Electric Mobility, Himeji Chiyoda Factory","079-293-1251",34.8297599,134.6775529,"ChIJD-mKy0DgVDURNeaZqo-XLkM","factory",1.23,0.92],["Komaki (okonomiyaki)","079-288-2246",34.8339662,134.7015739,"ChIJBbg86f3fVDUR6kurHbn9r2s","jpn",1.29,1.32],["Nakamura SS (City Hall front)","079-284-1433",34.8162673,134.6843131,"ChIJhZlwKmfgVDURpf-jK4Me9Sg","gas",1.3,1.77],["Saizeriya Himeji Shoda","079-283-8330",34.815076,134.688875,"ChIJlSXUX2TgVDURqURceyh2gC4","family",1.31,1.89],["FamilyMart Himeji Tegara","079-287-3301",34.8172628,134.6817302,"ChIJRduSr1_gVDUR4kI76njRRg4","conv",1.33,1.72],["Bread, Espresso & (cafe + bakery)","079-290-9250",34.8387757,134.6888541,"ChIJu5OcEADhVDURLrZxm77wSjA","cafe",1.34,0.77],["Sukiya Himeji Nanjo","0120-498-007",34.8141282,134.6917733,"ChIJ__-wKccmVTURNF4uHZVkoq0","fast",1.41,2.03],["Komeda's Coffee Tsukuda-cho","079-287-3350",34.8144019,134.6861477,"ChIJb-m7b2HgVDURJL7SVfghs0w","cafe",1.43,1.96],["Halows East Himeji (24 hours)","079-287-0086",34.8218728,134.7055426,"ChIJnTbIr-bfVDURt8S87GeiXmk","super",1.48,2.01],["Gusto Himeji Tsuchiyama","0570-021-208",34.8314541,134.6749646,"ChIJ99jO_0bgVDURDKBPgl7nFHs","family",1.51,1.12],["Home-run Dome (batting center)","079-287-1110",34.8257582,134.7070056,"ChIJDfIl9-TfVDURUi3komXL_F8","fun",1.51,1.93],["KFC Himeji Tsuchiyama","079-295-2230",34.8318624,134.6750827,"ChIJ-yoaUdfhVDUR3Wx39Oa7xKE","fast",1.52,1.11],["Alpha Living Himejijo West","",34.836058,134.6779254,"ChIJr26nuz7gVDURrX493HbYXvw","care",1.54,0.96],["Kura Sushi Arashiyama-cho","079-299-0610",34.8413889,134.6836111,"ChIJ8QyV7xjgVDURw02sLI-EL_Q","family",1.74,1.1],["Hamburg Steak Restaurant Himeji Paris Shokudo","079-233-0576",34.8090611,134.6898017,"ChIJG_OuIIjgVDURnxl5-Wk6Szo","yaki",1.97,2.56],["Starbucks Coffee Ichikawabashi-dori","079-240-7747",34.8281271,134.712099,"ChIJVavHlaPfVDUR3hvw7kutLlg","cafe",1.98,2.31],["Chibabi (Korean)","079-222-7758",34.8298233,134.7118843,"ChIJlcrCq37fVDURm2ILGpBClgM","world",1.98,2.26],["ENEOS EneJet Himeji Shiro-no-higashi","079-281-3421",34.8346057,134.7101523,"ChIJhYfd-fffVDURf4Hutpo65jk","gas",1.99,2.11],["Life Bira Himeji (care home / group home)","079-233-6565",34.8128847,134.6731827,"ChIJP9OXRffgVDURV2LP7hgs0g4","care",2.21,2.48],["Rainbow World Himeji (bowling, RIOS 3F)","079-240-5470",34.8269226,134.7151258,"ChIJI50grBLgVDURf0nMPrbxyJA","fun",2.25,2.6],["Hama-Sushi Himeji Nozato","",34.8387365,134.7105189,"ChIJrcSAJwkgVTURhfeAuBk-ue8","family",2.26,2.25],["Don Quijote Himeji RIOS","0570-032-911",34.8267185,134.7152242,"ChIJkQSD3PPfVDUR74UT9VDqFwY","retail",2.26,2.62],["Italian Kitchen VANSAN Chuji","079-297-5577",34.8177624,134.6670977,"ChIJFwzR__PhVDURo4Rmx5vLXUQ","world",2.36,2.43],["Gusto Himeji Shikama","0570-022-084",34.8066456,134.6807722,"ChIJR3FtIPPgVDURr6oZJN7P2YA","family",2.41,2.88],["Saizeriya Yume Town Himeji","079-296-6678",34.8406517,134.6697129,"ChIJH15DK8PhVDUR9h5g94FJVh4","family",2.44,1.87],["Tenjiku Himeji-Imajuku (Chinese)","079-297-2817",34.8368565,134.6659942,"ChIJ3ZOQQkrgVDURuPiNaIkF89s","world",2.5,2.01],["Makino Himeji Shikama (tempura)","079-234-7550",34.8062185,134.672978,"ChIJBzOF20PhVDURWVboAPH9eJU","jpn",2.79,3.15],["Kappa Sushi Nozato","079-286-8141",34.848246,134.7065075,"ChIJNT61r6shVTUReocM5FVp7M4","family",2.8,2.52],["Fashion Center Shimamura Shikama-higashi","079-231-0510",34.8014951,134.6887918,"ChIJ2SZoM47gVDURObpkHUSaong","retail",2.82,3.4],["Yoshinoya Himeji South","079-231-2558",34.8105364,134.6635434,"ChIJCU2jheLgVDUR-09JScdBfOM","fast",3.05,3.22],["TSUTAYA Himeji Hiromine","079-286-7771",34.853282,134.7039233,"ChIJ5ZA44R4gVTURkpVNvor4Fy4","retail",3.19,2.81],["Matsuya Hanada-cho","080-5985-8127",34.824368,134.725549,"ChIJkV1-NG7fVDURegE5xth8U-k","fast",3.21,3.6],["Shirogohan-ya Himeji Ippondo","079-263-7600",34.7980801,134.6781312,"ChIJbQB2SRzhVDURQwfWpxPGc38","jpn",3.39,3.86],["TSUTAYA Himeji Shikama","079-234-5539",34.807759,134.6585803,"ChIJAQDwKx_hVDURWX3xN3z_Xb4","retail",3.6,3.76],["Round One Himeji Shikama","079-243-1830",34.7945823,134.6853375,"ChIJeeED-r3gVDURz4FvN9TvrnQ","fun",3.61,4.17],["AEON MALL Himeji River City","079-231-2200",34.7985295,134.6682427,"ChIJOxyrOtzgVDURqhjsZJEdiRg","retail",3.74,4.11],["Pisola Himeji Hanada (Italian)","079-252-7900",34.8383786,134.7289469,"ChIJV5a1NtEhVTUR0gB22MkQObI","world",3.74,3.87],["AEON Himeji River City (supermarket)","079-231-2210",34.7981195,134.6686313,"ChIJt2iuPdzgVDURjHZlSokPuiM","super",3.76,4.13],["Kura Sushi Shikama (LAMU)","079-243-2800",34.7947164,134.6757541,"ChIJv_6MvsPgVDURmV0Q2gaAkDE","family",3.81,4.28],["UNIQLO Himeji Shikama (Kamo)","050-3096-6173",34.7992928,134.6606399,"ChIJxYONWADhVDURJQLN7d2jQM4","retail",4.1,4.38],["Ultimate Life Himeji No.1 Logistics Center","079-280-2364",34.8136599,134.7344512,"ChIJofopfmvfVDUR3AKBP17COIQ","factory",4.27,4.77],["Toll Express Japan, Himeji Branch","079-253-2265",34.8016032,134.7272978,"ChIJExjrTD8UIBURJuzl6Ls6ieA","factory",4.37,4.98]];

const CATS = {
  conv:    { icon: '🏪', c: '#FFE1B8', n: { en: 'Convenience Stores',   bn: 'কনভিনিয়েন্স স্টোর',         ja: 'コンビニ' } },
  fast:    { icon: '🍔', c: '#FFC9C4', n: { en: 'Fast Food',            bn: 'ফাস্ট ফুড ও গিউদোন',         ja: 'ファストフード・牛丼' } },
  family:  { icon: '🍣', c: '#E4CCF5', n: { en: 'Family & Sushi Chains', bn: 'ফ্যামিলি রেস্টুরেন্ট ও সুশি', ja: 'ファミレス・回転寿司' } },
  jpn:     { icon: '🍱', c: '#FFD0DF', n: { en: 'Japanese & Local Food', bn: 'জাপানি ও স্থানীয় খাবার',      ja: '和食・姫路グルメ' } },
  ramen:   { icon: '🍜', c: '#FFD9C2', n: { en: 'Ramen & Noodles',      bn: 'রামেন ও নুডলস',              ja: 'ラーメン・麺' } },
  yaki:    { icon: '🥩', c: '#E6D2C8', n: { en: 'Yakiniku & Western',   bn: 'ইয়াকিনিকু ও ওয়েস্টার্ন',      ja: '焼肉・洋食' } },
  world:   { icon: '🍛', c: '#CBD3F5', n: { en: 'World Cuisine',        bn: 'চাইনিজ, কোরিয়ান, ইন্ডিয়ান, ইতালিয়ান', ja: '中華・韓国・インド・イタリアン' } },
  izakaya: { icon: '🍢', c: '#BFE9E1', n: { en: 'Izakaya & Yakitori',   bn: 'ইজাকায়া ও ইয়াকিতরি',         ja: '居酒屋・焼き鳥' } },
  bars:    { icon: '🍸', c: '#D9C7F2', n: { en: 'Bars & Snack Bars',    bn: 'বার ও স্ন্যাক বার',            ja: 'バー・スナック' } },
  cafe:    { icon: '☕', c: '#E8D8CC', n: { en: 'Cafes & Sweets',       bn: 'ক্যাফে ও মিষ্টি',              ja: 'カフェ・スイーツ' } },
  super:   { icon: '🛒', c: '#C9EFD3', n: { en: 'Supermarkets & Drugstores', bn: 'সুপারমার্কেট ও ড্রাগস্টোর', ja: 'スーパー・ドラッグストア' } },
  retail:  { icon: '🛍️', c: '#C7DEFF', n: { en: 'Shops & Malls',        bn: 'দোকান ও শপিং মল',             ja: 'ショッピング' } },
  fun:     { icon: '🎤', c: '#D2CBF5', n: { en: 'Karaoke & Games',      bn: 'কারাওকে ও গেম সেন্টার',        ja: 'カラオケ・ゲーム' } },
  hotel:   { icon: '🏨', c: '#BDEBF0', n: { en: 'Hotels',               bn: 'হোটেল',                       ja: 'ホテル' } },
  factory: { icon: '🏭', c: '#D3DBE0', n: { en: 'Factories & Logistics', bn: 'কারখানা ও লজিস্টিকস',         ja: '工場・物流' } },
  gas:     { icon: '⛽', c: '#FFEFB0', n: { en: 'Gas Stations',         bn: 'গ্যাস স্টেশন',                ja: 'ガソリンスタンド' } },
  care:    { icon: '🧓', c: '#F8CCDD', n: { en: 'Care Facilities',      bn: 'কেয়ার ফ্যাসিলিটি',            ja: '介護施設' } },
};

const T = {
  en: {
    title: 'Arubaito', subtitle: 'Part-time job places around JR Himeji Station',
    scopeAll: 'Himeji · 5 km', scopeUomachi: 'Uomachi', search: 'Search shops, food, phone…',
    all: 'All', near: 'Near me', sortDist: 'Nearest', sortName: 'A–Z',
    places: n => `${n} place${n === 1 ? '' : 's'}`, from: 'from', fromStation: 'from JR Himeji Station', fromUomachi: 'from Uomachi center', fromYou: 'from you',
    call: 'Call', noNumber: 'No phone number listed', map: 'Open in Maps', route: 'Directions', save: 'Save', saved: 'Saved',
    share: 'Share', copy: 'Copy number', copied: 'Number copied', walk: 'walk', min: 'min', km: 'distance', category: 'Type',
    none: 'Nothing found', noneSub: 'Try another word or category.',
    tabExplore: 'Explore', tabSaved: 'Saved', tabAbout: 'About', savedSub: 'Places you want to call later',
    savedEmpty: 'No saved places yet', savedEmptySub: 'Tap the ♡ in a place to keep it here.',
    locOn: 'Sorted by distance from you', locFail: 'Could not get your location', locOff: 'Location is not supported',
    hint: 'Ask by phone whether they are hiring. Simple Japanese is usually enough.',
    aboutTitle: 'About this guide',
    about: [
      ['What is this?', 'A searchable list of places around JR Himeji Station where you can look for an arubaito (part-time job): restaurants, convenience stores, hotels, bars, shops, factories and more.'],
      ['Where is the data from?', 'Names, phone numbers and map locations come from Google Maps listings (October 2026). Some places have no number listed.'],
      ['Important', 'This list shows where to look, not who is hiring. Always call or check the shop’s recruitment page. Bars and snack bars can have special rules for age and work type — ask before you apply.'],
    ],
    walkNote: 'About',
  },
  bn: {
    title: 'আরুবাইতো', subtitle: 'JR হিমেজি স্টেশনের আশেপাশে পার্ট-টাইম কাজের জায়গা',
    scopeAll: 'হিমেজি · ৫ কিমি', scopeUomachi: 'উওমাচি', search: 'দোকান, খাবার, ফোন নম্বর খুঁজুন…',
    all: 'সব', near: 'আমার কাছে', sortDist: 'কাছেরটা আগে', sortName: 'A–Z',
    places: n => `${n}টি জায়গা`, from: 'থেকে', fromStation: 'JR হিমেজি স্টেশন থেকে', fromUomachi: 'উওমাচির কেন্দ্র থেকে', fromYou: 'আপনার কাছ থেকে',
    call: 'কল করুন', noNumber: 'ফোন নম্বর পাওয়া যায়নি', map: 'ম্যাপে দেখুন', route: 'রুট', save: 'সেভ', saved: 'সেভ করা',
    share: 'শেয়ার', copy: 'নম্বর কপি', copied: 'নম্বর কপি হয়েছে', walk: 'হাঁটা', min: 'মিনিট', km: 'দূরত্ব', category: 'ধরন',
    none: 'কিছু পাওয়া যায়নি', noneSub: 'অন্য শব্দ বা বিভাগ চেষ্টা করুন।',
    tabExplore: 'খুঁজুন', tabSaved: 'সেভ করা', tabAbout: 'তথ্য', savedSub: 'পরে কল করবেন এমন জায়গা',
    savedEmpty: 'এখনও কিছু সেভ করা নেই', savedEmptySub: 'কোনো জায়গায় ♡ চাপলে সেটা এখানে থাকবে।',
    locOn: 'আপনার অবস্থান থেকে দূরত্ব অনুযায়ী সাজানো', locFail: 'আপনার অবস্থান পাওয়া যায়নি', locOff: 'এই ডিভাইসে লোকেশন কাজ করছে না',
    hint: 'কাজের লোক নেওয়া হচ্ছে কি না ফোন করে জিজ্ঞেস করুন। সহজ জাপানিই সাধারণত যথেষ্ট।',
    aboutTitle: 'এই গাইড সম্পর্কে',
    about: [
      ['এটা কী?', 'JR হিমেজি স্টেশনের আশেপাশে আরুবাইতো (পার্ট-টাইম কাজ) খোঁজার জায়গার তালিকা: রেস্টুরেন্ট, কনভিনিয়েন্স স্টোর, হোটেল, বার, দোকান, কারখানা ইত্যাদি।'],
      ['তথ্য কোথা থেকে?', 'নাম, ফোন নম্বর আর ম্যাপের অবস্থান Google Maps থেকে নেওয়া (অক্টোবর ২০২৬)। কিছু জায়গার নম্বর নেই।'],
      ['গুরুত্বপূর্ণ', 'এই তালিকা শুধু কোথায় খুঁজবেন তা দেখায়, কে লোক নিচ্ছে তা নয়। সবসময় ফোন করে বা দোকানের ওয়েবসাইটে দেখে নিন। বার ও স্ন্যাক বারে বয়স আর কাজের ধরন নিয়ে আলাদা নিয়ম থাকতে পারে, আবেদনের আগে জিজ্ঞেস করুন।'],
    ],
  },
  ja: {
    title: 'アルバイト', subtitle: 'JR姫路駅周辺のアルバイト先リスト',
    scopeAll: '姫路・5km', scopeUomachi: '魚町', search: '店名・料理・電話番号で検索…',
    all: 'すべて', near: '現在地', sortDist: '近い順', sortName: '名前順',
    places: n => `${n}件`, from: 'から', fromStation: 'JR姫路駅から', fromUomachi: '魚町の中心から', fromYou: '現在地から',
    call: '電話する', noNumber: '電話番号が見つかりません', map: 'マップで開く', route: '経路', save: '保存', saved: '保存済み',
    share: '共有', copy: '番号をコピー', copied: '番号をコピーしました', walk: '徒歩', min: '分', km: '距離', category: '種類',
    none: '見つかりません', noneSub: '別のキーワードやカテゴリを試してください。',
    tabExplore: '探す', tabSaved: '保存', tabAbout: '情報', savedSub: 'あとで電話したいお店',
    savedEmpty: '保存したお店はありません', savedEmptySub: 'お店の ♡ をタップするとここに入ります。',
    locOn: '現在地から近い順に表示中', locFail: '現在地を取得できませんでした', locOff: 'この端末では位置情報が使えません',
    hint: '募集しているかは電話で確認しましょう。簡単な日本語で大丈夫です。',
    aboutTitle: 'このガイドについて',
    about: [
      ['これは何？', 'JR姫路駅周辺でアルバイトを探せるお店の検索リストです。飲食店、コンビニ、ホテル、バー、ショップ、工場など。'],
      ['データの出典', '店名・電話番号・地図の位置は Google マップの情報（2026年10月）です。電話番号が無いお店もあります。'],
      ['ご注意', 'このリストは「探す場所」を示すもので、募集中かどうかは分かりません。必ず電話や店舗の採用ページで確認してください。バー・スナックは年齢や仕事内容に特別なルールがある場合があります。'],
    ],
  },
};

/* ---------- state ---------- */
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* private mode */ } },
};
const guessLang = () => { const l = (navigator.language || 'en').toLowerCase(); return l.startsWith('bn') ? 'bn' : l.startsWith('ja') ? 'ja' : 'en'; };
const S = {
  lang: store.get('lang', guessLang()), scope: 'all', cat: 'all', q: '', sort: 'dist', tab: 'explore',
  saved: new Set(store.get('saved', [])), user: null, near: false, current: null,
};
const PLACES = RAW.map((r, i) => ({ id: r[4], i, name: r[0], phone: r[1], lat: r[2], lon: r[3], cat: r[5], ds: r[6], du: r[7] }));
const BY_ID = Object.fromEntries(PLACES.map(p => [p.id, p]));
const UOMACHI_R = 0.8;

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const t = () => T[S.lang];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const catName = c => CATS[c].n[S.lang];
const telHref = p => 'tel:' + p.replace(/[^0-9+]/g, '');
const mapUrl = p => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.name + ' Himeji')}&query_place_id=${p.id}`;
const routeUrl = p => `https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lon}&destination_place_id=${p.id}&travelmode=walking`;
const fmtKm = d => d < 1 ? `${Math.max(10, Math.round(d * 100) * 10)} m` : `${d.toFixed(1)} km`;
const walkMin = d => Math.max(1, Math.round(d * 12.5));
const hav = (a, b, c, d) => { const R = 6371, r = Math.PI / 180, x = (c - a) * r, y = (d - b) * r; const h = Math.sin(x / 2) ** 2 + Math.cos(a * r) * Math.cos(c * r) * Math.sin(y / 2) ** 2; return 2 * R * Math.asin(Math.sqrt(h)); };
const distOf = p => (S.near && S.user) ? hav(S.user.lat, S.user.lon, p.lat, p.lon) : (S.scope === 'uomachi' ? p.du : p.ds);
const refLabel = () => (S.near && S.user) ? t().fromYou : (S.scope === 'uomachi' ? t().fromUomachi : t().fromStation);
const inScope = p => S.scope === 'uomachi' ? p.du <= UOMACHI_R : true;
const icoHtml = c => `<div class="ico" style="--c:${CATS[c].c}">${CATS[c].icon}</div>`;
const PHONE_SVG = '<svg viewBox="0 0 24 24"><path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.6a1 1 0 01-.25 1z"/></svg>';
const HEART_SVG = '<svg viewBox="0 0 24 24"><path d="M12 20.5s-7.5-4.6-7.5-10A4.3 4.3 0 0112 7.6a4.3 4.3 0 017.5 2.9c0 5.4-7.5 10-7.5 10z"/></svg>';

/* ---------- filtering ---------- */
function matches(p) {
  if (!inScope(p)) return false;
  if (S.cat !== 'all' && p.cat !== S.cat) return false;
  const q = S.q.trim().toLowerCase();
  if (!q) return true;
  const digits = q.replace(/\D/g, '');
  return p.name.toLowerCase().includes(q) || catName(p.cat).toLowerCase().includes(q) ||
         CATS[p.cat].n.en.toLowerCase().includes(q) || (digits.length >= 3 && p.phone.replace(/\D/g, '').includes(digits));
}
function sorted(list) {
  return list.slice().sort(S.sort === 'name'
    ? (a, b) => a.name.localeCompare(b.name)
    : (a, b) => distOf(a) - distOf(b));
}

/* ---------- rendering ---------- */
function itemHtml(p, idx) {
  const d = distOf(p), has = !!p.phone;
  return `<li class="item" data-id="${p.id}" style="--i:${Math.min(idx, 14)}">
    ${icoHtml(p.cat)}
    <div class="meta">
      <div class="name">${esc(p.name)}</div>
      <div class="sub"><span>${esc(catName(p.cat))}</span><span class="dot">•</span><span>${fmtKm(d)}</span></div>
      <div class="sub phone">${has ? esc(p.phone) : '—'}</div>
    </div>
    <div class="act"><a class="round ${has ? '' : 'off'}" ${has ? `href="${telHref(p.phone)}"` : ''} aria-label="${t().call}" data-stop>${PHONE_SVG}</a></div>
  </li>`;
}
function renderChips() {
  const base = PLACES.filter(inScope), counts = {};
  base.forEach(p => counts[p.cat] = (counts[p.cat] || 0) + 1);
  const keys = Object.keys(CATS).filter(k => counts[k]);
  if (S.cat !== 'all' && !counts[S.cat]) S.cat = 'all';
  $('#chips').innerHTML =
    `<button class="chip ${S.cat === 'all' ? 'active' : ''}" data-cat="all">${t().all} <em>${base.length}</em></button>` +
    keys.map(k => `<button class="chip ${S.cat === k ? 'active' : ''}" data-cat="${k}">${CATS[k].icon} ${esc(catName(k))} <em>${counts[k]}</em></button>`).join('');
}
function renderList() {
  const list = sorted(PLACES.filter(matches));
  $('#list').innerHTML = list.map(itemHtml).join('');
  $('#count').textContent = `${t().places(list.length)} · ${refLabel()}`;
  const e = $('#empty'); e.hidden = list.length > 0;
  e.innerHTML = `<span class="big">🔍</span><b>${t().none}</b><br>${t().noneSub}`;
}
function renderSaved() {
  const list = sorted(PLACES.filter(p => S.saved.has(p.id)));
  $('#savedList').innerHTML = list.map(itemHtml).join('');
  const e = $('#savedEmpty'); e.hidden = list.length > 0;
  e.innerHTML = `<span class="big">♡</span><b>${t().savedEmpty}</b><br>${t().savedEmptySub}`;
  const b = $('#savedBadge'); b.hidden = !S.saved.size; b.textContent = S.saved.size;
}
function renderAbout() {
  $('#aboutCard').innerHTML = t().about.map((a, i) => `<h3>${a[0]}</h3><p class="${i === 2 ? 'warn' : ''}">${a[1]}</p>`).join('');
}
function applyLang() {
  const L = t();
  document.documentElement.lang = S.lang;
  $$('[data-i]').forEach(el => { const v = L[el.dataset.i]; if (typeof v === 'string') el.textContent = v; });
  $('#q').placeholder = L.search;
  $('#navTitle').textContent = L.title;
  $('#langLabel').textContent = S.lang.toUpperCase();
  const [a, b] = $$('.seg', $('#scopeSeg')); a.textContent = L.scopeAll; b.textContent = L.scopeUomachi;
  $('#sortBtn').textContent = S.sort === 'dist' ? L.sortDist : L.sortName;
  renderChips(); renderList(); renderSaved(); renderAbout();
  if (S.current) openSheet(S.current, true);
}

/* ---------- sheet ---------- */
function openSheet(id, keep) {
  const p = BY_ID[id]; if (!p) return;
  S.current = id;
  const L = t(), d = (S.near && S.user) ? distOf(p) : p.ds, has = !!p.phone, isSaved = S.saved.has(id);
  $('#sheetBody').innerHTML = `
    <div class="s-head">${icoHtml(p.cat)}<div><h2>${esc(p.name)}</h2><p>${esc(catName(p.cat))}</p></div></div>
    <div class="facts">
      <div class="fact"><b>${fmtKm(d)}</b><span>${(S.near && S.user) ? L.fromYou : L.fromStation}</span></div>
      <div class="fact"><b>${walkMin(d)} ${L.min}</b><span>${L.walk}</span></div>
      <div class="fact"><b>${has ? esc(p.phone) : '—'}</b><span>☎</span></div>
    </div>
    <div class="actions">
      <a class="btn call ${has ? '' : 'off'}" ${has ? `href="${telHref(p.phone)}"` : ''}>${PHONE_SVG}${has ? `${L.call} · ${esc(p.phone)}` : L.noNumber}</a>
      <a class="btn map" href="${mapUrl(p)}" target="_blank" rel="noopener">📍 ${L.map}</a>
      <a class="btn route" href="${routeUrl(p)}" target="_blank" rel="noopener">🚶 ${L.route}</a>
      <button class="btn sec ${isSaved ? 'saved' : ''}" id="sSave">${HEART_SVG}${isSaved ? L.saved : L.save}</button>
      <button class="btn sec" id="sShare">⇪ ${L.share}</button>
      ${has ? `<button class="btn sec" id="sCopy" style="grid-column:1/-1">⧉ ${L.copy}</button>` : ''}
    </div>
    <p class="hint">${L.hint}</p>`;
  $('#sheet').classList.add('show'); $('#sheet').setAttribute('aria-hidden', 'false');
  $('#backdrop').classList.add('show');
  $('#sSave').onclick = () => { toggleSave(id); openSheet(id, true); };
  $('#sShare').onclick = () => share(p);
  const c = $('#sCopy'); if (c) c.onclick = () => copy(p.phone);
}
function closeSheet() {
  S.current = null;
  const s = $('#sheet'); s.classList.remove('show'); s.style.transform = ''; s.setAttribute('aria-hidden', 'true');
  $('#backdrop').classList.remove('show');
}
function toggleSave(id) {
  S.saved.has(id) ? S.saved.delete(id) : S.saved.add(id);
  store.set('saved', [...S.saved]); renderSaved();
}
async function share(p) {
  const text = `${p.name}${p.phone ? ' ' + p.phone : ''}`;
  try { if (navigator.share) { await navigator.share({ title: p.name, text, url: mapUrl(p) }); return; } } catch (e) { return; }
  copy(mapUrl(p));
}
async function copy(txt) {
  try { await navigator.clipboard.writeText(txt); toast(t().copied); }
  catch (e) { const ta = document.createElement('textarea'); ta.value = txt; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); toast(t().copied); } catch (_) { /* ignore */ } ta.remove(); }
}
let toastTimer;
function toast(msg) { const el = $('#toast'); el.textContent = msg; el.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 2000); }

/* ---------- events ---------- */
document.addEventListener('click', e => {
  const stop = e.target.closest('[data-stop]'); if (stop) return;          // let the call link work
  const item = e.target.closest('.item'); if (item) { openSheet(item.dataset.id); return; }
  const chip = e.target.closest('.chip'); if (chip) { S.cat = chip.dataset.cat; renderChips(); renderList(); chip.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' }); return; }
});
$('#scopeSeg').addEventListener('click', e => {
  const b = e.target.closest('.seg'); if (!b) return;
  S.scope = b.dataset.scope;
  $$('.seg', $('#scopeSeg')).forEach(x => x.classList.toggle('active', x === b));
  $('#scopeSeg').dataset.pos = S.scope === 'uomachi' ? 1 : 0;
  renderChips(); renderList();
});
$('#q').addEventListener('input', e => { S.q = e.target.value; $('#clearQ').hidden = !S.q; renderList(); });
$('#clearQ').addEventListener('click', () => { S.q = ''; $('#q').value = ''; $('#clearQ').hidden = true; $('#q').focus(); renderList(); });
$('#sortBtn').addEventListener('click', () => { S.sort = S.sort === 'dist' ? 'name' : 'dist'; $('#sortBtn').textContent = S.sort === 'dist' ? t().sortDist : t().sortName; renderList(); });
$('#nearBtn').addEventListener('click', () => {
  if (S.near) { S.near = false; $('#nearBtn').classList.remove('on'); renderList(); return; }
  if (!navigator.geolocation) return toast(t().locOff);
  navigator.geolocation.getCurrentPosition(pos => {
    S.user = { lat: pos.coords.latitude, lon: pos.coords.longitude }; S.near = true; S.sort = 'dist';
    $('#nearBtn').classList.add('on'); $('#sortBtn').textContent = t().sortDist; renderList(); toast(t().locOn);
  }, () => toast(t().locFail), { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 });
});
$('#langBtn').addEventListener('click', () => {
  const order = ['en', 'bn', 'ja']; S.lang = order[(order.indexOf(S.lang) + 1) % 3]; store.set('lang', S.lang); applyLang();
});
$('#tabbar').addEventListener('click', e => {
  const b = e.target.closest('.tab'); if (!b) return;
  S.tab = b.dataset.tab; const order = ['explore', 'saved', 'about'];
  $('#tabbar').dataset.pos = order.indexOf(S.tab);
  $$('.tab').forEach(x => x.classList.toggle('active', x === b));
  $$('.view').forEach(v => v.classList.toggle('active', v.id === 'view-' + S.tab));
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
$('#backdrop').addEventListener('click', closeSheet);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSheet(); });

/* drag the sheet down to close */
(() => {
  const sheet = $('#sheet'); let y0 = 0, dy = 0, on = false;
  sheet.addEventListener('touchstart', e => { if (sheet.scrollTop > 0) return; on = true; y0 = e.touches[0].clientY; dy = 0; }, { passive: true });
  sheet.addEventListener('touchmove', e => {
    if (!on) return; dy = e.touches[0].clientY - y0;
    if (dy > 0) { sheet.classList.add('dragging'); sheet.style.transform = `translate(-50%, ${dy}px)`; }
  }, { passive: true });
  sheet.addEventListener('touchend', () => {
    if (!on) return; on = false; sheet.classList.remove('dragging');
    if (dy > 110) closeSheet(); else sheet.style.transform = '';
  });
})();

/* collapsing nav title */
(() => {
  const nav = $('#nav'); let tick = false;
  addEventListener('scroll', () => { if (tick) return; tick = true; requestAnimationFrame(() => { nav.classList.toggle('scrolled', scrollY > 44); tick = false; }); }, { passive: true });
})();

applyLang();
