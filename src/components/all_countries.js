const all_countries = [
    {
        "iso": "AF",
        "english_name": "Afghanistan",
        "native_name": "Afghanistan",
        "population": 10
    },
    {
        "iso": "AL",
        "english_name": "Albania",
        "native_name": "Albania",
        "population": 10
    },
    {
        "iso": "DZ",
        "english_name": "Algeria",
        "native_name": "Algeria",
        "population": 33
    },
    {
        "iso": "AO",
        "english_name": "Angola",
        "native_name": "Angola",
        "population": 14
    },
    {
        "iso": "AR",
        "english_name": "Argentina",
        "native_name": "Argentina",
        "population": 47
    },
    {
        "iso": "AM",
        "english_name": "Armenia",
        "native_name": "Armenia",
        "population": 5
    },
    {
        "iso": "AU",
        "english_name": "Australia",
        "native_name": "Australia",
        "population": 27
    },
    {
        "iso": "AT",
        "english_name": "Austria",
        "native_name": "Austria",
        "population": 10
    },
    {
        "iso": "AZ",
        "english_name": "Azerbaijan",
        "native_name": "Azerbaijan",
        "population": 10
    },
    {
        "iso": "BH",
        "english_name": "Bahrain",
        "native_name": "Bahrain",
        "population": 10
    },
    {
        "iso": "BD",
        "english_name": "Bangladesh",
        "native_name": "Bangladesh",
        "population": 32
    },
    {
        "iso": "BY",
        "english_name": "Belarus",
        "native_name": "Belarus",
        "population": 10
    },
    {
        "iso": "BE",
        "english_name": "Belgium",
        "native_name": "Belgium",
        "population": 11
    },
    {
        "iso": "BZ",
        "english_name": "Belize",
        "native_name": "Belize",
        "population": 5
    },
    {
        "iso": "BJ",
        "english_name": "Benin",
        "native_name": "Benin",
        "population": 5
    },
    {
        "iso": "BM",
        "english_name": "Bermuda",
        "native_name": "Bermuda",
        "population": 10
    },
    {
        "iso": "BT",
        "english_name": "Bhutan",
        "native_name": "Bhutan",
        "population": 10
    },
    {
        "iso": "BO",
        "english_name": "Bolivia",
        "native_name": "Bolivia",
        "population": 10
    },
    {
        "iso": "BA",
        "english_name": "Bosnia and Herzegovina",
        "native_name": "Bosnia & Herzegovina",
        "population": 10
    },
    {
        "iso": "BW",
        "english_name": "Botswana",
        "native_name": "Botswana",
        "population": 5
    },
    {
        "iso": "BR",
        "english_name": "Brazil",
        "native_name": "Brazil",
        "population": 170
    },
    {
        "iso": "BN",
        "english_name": "Brunei",
        "native_name": "Brunei",
        "population": 5
    },
    {
        "iso": "BG",
        "english_name": "Bulgaria",
        "native_name": "Bulgaria",
        "population": 10
    },
    {
        "iso": "BF",
        "english_name": "Burkina Faso",
        "native_name": "Burkina Faso",
        "population": 1
    },
    {
        "iso": "BI",
        "english_name": "Burundi",
        "native_name": "Burundi",
        "population": 1
    },
    {
        "iso": "KH",
        "english_name": "Cambodia",
        "native_name": "Cambodia",
        "population": 10
    },
    {
        "iso": "CM",
        "english_name": "Cameroon",
        "native_name": "Cameroon",
        "population": 3
    },
    {
        "iso": "CA",
        "english_name": "Canada",
        "native_name": "Canada",
        "population": 41
    },
    {
        "iso": "CF",
        "english_name": "Central African Republic",
        "native_name": "Central African Republic",
        "population": 1
    },
    {
        "iso": "TD",
        "english_name": "Chad",
        "native_name": "Chad",
        "population": 3
    },
    {
        "iso": "CL",
        "english_name": "Chile",
        "native_name": "Chile",
        "population": 17
    },
    {
        "iso": "CN",
        "english_name": "China",
        "native_name": "China",
        "population": 1022
    },
    {
        "iso": "CO",
        "english_name": "Colombia",
        "native_name": "Colombia",
        "population": 37
    },
    {
        "iso": "CG",
        "english_name": "Congo",
        "native_name": "Republic of the Congo (Brazzaville)",
        "population": 2
    },
    {
        "iso": "CR",
        "english_name": "Costa Rica",
        "native_name": "Costa Rica",
        "population": 4
    },
    {
        "iso": "HR",
        "english_name": "Croatia",
        "native_name": "Croatia",
        "population": 10
    },
    {
        "iso": "CU",
        "english_name": "Cuba",
        "native_name": "Cuba",
        "population": 10
    },
    {
        "iso": "CY",
        "english_name": "Cyprus",
        "native_name": "Cyprus",
        "population": 5
    },
    {
        "iso": "CZ",
        "english_name": "Czechia",
        "native_name": "Czech Republic",
        "population": 10
    },
    {
        "iso": "XC",
        "english_name": "Czechoslovakia",
        "native_name": "Czechoslovakia",
        "population": 15
    },
    {
        "iso": "DK",
        "english_name": "Denmark",
        "native_name": "Denmark",
        "population": 10
    },
    {
        "iso": "DJ",
        "english_name": "Djibouti",
        "native_name": "Djibouti",
        "population": 1
    },
    {
        "iso": "DM",
        "english_name": "Dominica",
        "native_name": "Dominica",
        "population": 10
    },
    {
        "iso": "DO",
        "english_name": "Dominican Republic",
        "native_name": "Dominican Republic",
        "population": 10
    },
    {
        "iso": "CD",
        "english_name": "DR Congo",
        "native_name": "Democratic Republic of the Congo (Kinshasa)",
        "population": 21
    },
    {
        "iso": "XG",
        "english_name": "East Germany",
        "native_name": "East Germany",
        "population": 16
    },
    {
        "iso": "TL",
        "english_name": "East Timor",
        "native_name": "Timor-Leste",
        "population": 1
    },
    {
        "iso": "EC",
        "english_name": "Ecuador",
        "native_name": "Ecuador",
        "population": 13
    },
    {
        "iso": "EG",
        "english_name": "Egypt",
        "native_name": "Egypt",
        "population": 28
    },
    {
        "iso": "SV",
        "english_name": "El Salvador",
        "native_name": "El Salvador",
        "population": 4
    },
    {
        "iso": "GQ",
        "english_name": "Equatorial Guinea",
        "native_name": "Equatorial Guinea",
        "population": 1
    },
    {
        "iso": "ER",
        "english_name": "Eritrea",
        "native_name": "Eritrea",
        "population": 1
    },
    {
        "iso": "EE",
        "english_name": "Estonia",
        "native_name": "Estonia",
        "population": 10
    },
    {
        "iso": "SZ",
        "english_name": "Eswatini",
        "native_name": "Eswatini (Swaziland)",
        "population": 1
    },
    {
        "iso": "ET",
        "english_name": "Ethiopia",
        "native_name": "Ethiopia",
        "population": 20
    },
    {
        "iso": "FI",
        "english_name": "Finland",
        "native_name": "Finland",
        "population": 10
    },
    {
        "iso": "FR",
        "english_name": "France",
        "native_name": "France",
        "population": 68
    },
    {
        "iso": "GA",
        "english_name": "Gabon",
        "native_name": "Gabon",
        "population": 2
    },
    {
        "iso": "GM",
        "english_name": "Gambia",
        "native_name": "Gambia",
        "population": 1
    },
    {
        "iso": "GE",
        "english_name": "Georgia",
        "native_name": "Georgia",
        "population": 5
    },
    {
        "iso": "DE",
        "english_name": "Germany",
        "native_name": "Germany",
        "population": 83
    },
    {
        "iso": "GH",
        "english_name": "Ghana",
        "native_name": "Ghana",
        "population": 6
    },
    {
        "iso": "GR",
        "english_name": "Greece",
        "native_name": "Greece",
        "population": 10
    },
    {
        "iso": "GT",
        "english_name": "Guatemala",
        "native_name": "Guatemala",
        "population": 9
    },
    {
        "iso": "GN",
        "english_name": "Guinea",
        "native_name": "Guinea",
        "population": 5
    },
    {
        "iso": "GW",
        "english_name": "Guinea-Bissau",
        "native_name": "Guinea-Bissau",
        "population": 1
    },
    {
        "iso": "GY",
        "english_name": "Guyana",
        "native_name": "Guyana",
        "population": 1
    },
    {
        "iso": "HT",
        "english_name": "Haiti",
        "native_name": "Haiti",
        "population": 2
    },
    {
        "iso": "HN",
        "english_name": "Honduras",
        "native_name": "Honduras",
        "population": 2
    },
    {
        "iso": "HK",
        "english_name": "Hong Kong",
        "native_name": "Hong Kong SAR China",
        "population": 10
    },
    {
        "iso": "HU",
        "english_name": "Hungary",
        "native_name": "Hungary",
        "population": 10
    },
    {
        "iso": "IS",
        "english_name": "Iceland",
        "native_name": "Iceland",
        "population": 10
    },
    {
        "iso": "IN",
        "english_name": "India",
        "native_name": "India",
        "population": 644
    },
    {
        "iso": "ID",
        "english_name": "Indonesia",
        "native_name": "Indonesia",
        "population": 167
    },
    {
        "iso": "IR",
        "english_name": "Iran",
        "native_name": "Iran",
        "population": 69
    },
    {
        "iso": "IQ",
        "english_name": "Iraq",
        "native_name": "Iraq",
        "population": 21
    },
    {
        "iso": "IE",
        "english_name": "Ireland",
        "native_name": "Ireland",
        "population": 10
    },
    {
        "iso": "IL",
        "english_name": "Israel",
        "native_name": "Israel",
        "population": 10
    },
    {
        "iso": "IT",
        "english_name": "Italy",
        "native_name": "Italy",
        "population": 58
    },
    {
        "iso": "CI",
        "english_name": "Ivory Coast",
        "native_name": "Côte d’Ivoire",
        "population": 6
    },
    {
        "iso": "JM",
        "english_name": "Jamaica",
        "native_name": "Jamaica",
        "population": 2
    },
    {
        "iso": "JP",
        "english_name": "Japan",
        "native_name": "Japan",
        "population": 123
    },
    {
        "iso": "JO",
        "english_name": "Jordan",
        "native_name": "Jordan",
        "population": 9
    },
    {
        "iso": "KZ",
        "english_name": "Kazakhstan",
        "native_name": "Kazakhstan",
        "population": 17
    },
    {
        "iso": "KE",
        "english_name": "Kenya",
        "native_name": "Kenya",
        "population": 15
    },
    {
        "iso": "XK",
        "english_name": "Kosovo",
        "native_name": "Kosovo",
        "population": 5
    },
    {
        "iso": "KW",
        "english_name": "Kuwait",
        "native_name": "Kuwait",
        "population": 5
    },
    {
        "iso": "KG",
        "english_name": "Kyrgyzstan",
        "native_name": "Kyrgyzstan",
        "population": 5
    },
    {
        "iso": "LA",
        "english_name": "Laos",
        "native_name": "Laos",
        "population": 5
    },
    {
        "iso": "LV",
        "english_name": "Latvia",
        "native_name": "Latvia",
        "population": 10
    },
    {
        "iso": "LB",
        "english_name": "Lebanon",
        "native_name": "Lebanon",
        "population": 10
    },
    {
        "iso": "LS",
        "english_name": "Lesotho",
        "native_name": "Lesotho",
        "population": 1
    },
    {
        "iso": "LR",
        "english_name": "Liberia",
        "native_name": "Liberia",
        "population": 2
    },
    {
        "iso": "LY",
        "english_name": "Libya",
        "native_name": "Libya",
        "population": 3
    },
    {
        "iso": "LT",
        "english_name": "Lithuania",
        "native_name": "Lithuania",
        "population": 10
    },
    {
        "iso": "LU",
        "english_name": "Luxembourg",
        "native_name": "Luxembourg",
        "population": 10
    },
    {
        "iso": "MO",
        "english_name": "Macao",
        "native_name": "Macau SAR China",
        "population": 1
    },
    {
        "iso": "MK",
        "english_name": "Macedonia",
        "native_name": "Macedonia",
        "population": 10
    },
    {
        "iso": "MG",
        "english_name": "Madagascar",
        "native_name": "Madagascar",
        "population": 1
    },
    {
        "iso": "MW",
        "english_name": "Malawi",
        "native_name": "Malawi",
        "population": 5
    },
    {
        "iso": "MY",
        "english_name": "Malaysia",
        "native_name": "Malaysia",
        "population": 34
    },
    {
        "iso": "ML",
        "english_name": "Mali",
        "native_name": "Mali",
        "population": 2
    },
    {
        "iso": "MT",
        "english_name": "Malta",
        "native_name": "Malta",
        "population": 2
    },
    {
        "iso": "MR",
        "english_name": "Mauritania",
        "native_name": "Mauritania",
        "population": 1
    },
    {
        "iso": "MX",
        "english_name": "Mexico",
        "native_name": "Mexico",
        "population": 130
    },
    {
        "iso": "MD",
        "english_name": "Moldova",
        "native_name": "Moldova",
        "population": 5
    },
    {
        "iso": "MN",
        "english_name": "Mongolia",
        "native_name": "Mongolia",
        "population": 10
    },
    {
        "iso": "ME",
        "english_name": "Montenegro",
        "native_name": "Montenegro",
        "population": 5
    },
    {
        "iso": "MA",
        "english_name": "Morocco",
        "native_name": "Morocco",
        "population": 32
    },
    {
        "iso": "MZ",
        "english_name": "Mozambique",
        "native_name": "Mozambique",
        "population": 5
    },
    {
        "iso": "MM",
        "english_name": "Myanmar",
        "native_name": "Myanmar (Burma)",
        "population": 4
    },
    {
        "iso": "NA",
        "english_name": "Namibia",
        "native_name": "Namibia",
        "population": 1
    },
    {
        "iso": "NP",
        "english_name": "Nepal",
        "native_name": "Nepal",
        "population": 16
    },
    {
        "iso": "NL",
        "english_name": "Netherlands",
        "native_name": "Netherlands",
        "population": 18
    },
    {
        "iso": "NZ",
        "english_name": "New Zealand",
        "native_name": "New Zealand",
        "population": 10
    },
    {
        "iso": "NI",
        "english_name": "Nicaragua",
        "native_name": "Nicaragua",
        "population": 1
    },
    {
        "iso": "NE",
        "english_name": "Niger",
        "native_name": "Niger",
        "population": 5
    },
    {
        "iso": "NG",
        "english_name": "Nigeria",
        "native_name": "Nigeria",
        "population": 27
    },
    {
        "iso": "KP",
        "english_name": "North Korea",
        "native_name": "North Korea",
        "population": 25
    },
    {
        "iso": "XI",
        "english_name": "Northern Ireland",
        "native_name": "Northern Ireland",
        "population": 10
    },
    {
        "iso": "NO",
        "english_name": "Norway",
        "native_name": "Norway",
        "population": 10
    },
    {
        "iso": "OM",
        "english_name": "Oman",
        "native_name": "Oman",
        "population": 4
    },
    {
        "iso": "PK",
        "english_name": "Pakistan",
        "native_name": "Pakistan",
        "population": 10
    },
    {
        "iso": "PS",
        "english_name": "Palestine",
        "native_name": "Palestinian Territories",
        "population": 10
    },
    {
        "iso": "PA",
        "english_name": "Panama",
        "native_name": "Panama",
        "population": 10
    },
    {
        "iso": "PG",
        "english_name": "Papua New Guinea",
        "native_name": "Papua New Guinea",
        "population": 1
    },
    {
        "iso": "PY",
        "english_name": "Paraguay",
        "native_name": "Paraguay",
        "population": 10
    },
    {
        "iso": "PE",
        "english_name": "Peru",
        "native_name": "Peru",
        "population": 24
    },
    {
        "iso": "PH",
        "english_name": "Philippines",
        "native_name": "Philippines",
        "population": 32
    },
    {
        "iso": "PL",
        "english_name": "Poland",
        "native_name": "Poland",
        "population": 37
    },
    {
        "iso": "PT",
        "english_name": "Portugal",
        "native_name": "Portugal",
        "population": 10
    },
    {
        "iso": "PR",
        "english_name": "Puerto Rico",
        "native_name": "Puerto Rico",
        "population": 10
    },
    {
        "iso": "QA",
        "english_name": "Qatar",
        "native_name": "Qatar",
        "population": 10
    },
    {
        "iso": "RO",
        "english_name": "Romania",
        "native_name": "Romania",
        "population": 19
    },
    {
        "iso": "RU",
        "english_name": "Russia",
        "native_name": "Russia",
        "population": 146
    },
    {
        "iso": "RW",
        "english_name": "Rwanda",
        "native_name": "Rwanda",
        "population": 4
    },
    {
        "iso": "SA",
        "english_name": "Saudi Arabia",
        "native_name": "Saudi Arabia",
        "population": 32
    },
    {
        "iso": "SN",
        "english_name": "Senegal",
        "native_name": "Senegal",
        "population": 10
    },
    {
        "iso": "RS",
        "english_name": "Serbia",
        "native_name": "Serbia",
        "population": 10
    },
    {
        "iso": "CS",
        "english_name": "Serbia and Montenegro",
        "native_name": "Serbia and Montenegro",
        "population": 10
    },
    {
        "iso": "SL",
        "english_name": "Sierra Leone",
        "native_name": "Sierra Leone",
        "population": 1
    },
    {
        "iso": "SG",
        "english_name": "Singapore",
        "native_name": "Singapore",
        "population": 10
    },
    {
        "iso": "SK",
        "english_name": "Slovakia",
        "native_name": "Slovakia",
        "population": 10
    },
    {
        "iso": "SI",
        "english_name": "Slovenia",
        "native_name": "Slovenia",
        "population": 10
    },
    {
        "iso": "SO",
        "english_name": "Somalia",
        "native_name": "Somalia",
        "population": 2
    },
    {
        "iso": "ZA",
        "english_name": "South Africa",
        "native_name": "South Africa",
        "population": 42
    },
    {
        "iso": "KR",
        "english_name": "South Korea",
        "native_name": "South Korea",
        "population": 51
    },
    {
        "iso": "SS",
        "english_name": "South Sudan",
        "native_name": "South Sudan",
        "population": 1
    },
    {
        "iso": "SU",
        "english_name": "Soviet Union",
        "native_name": "Soviet Union",
        "population": 290
    },
    {
        "iso": "ES",
        "english_name": "Spain",
        "native_name": "Spain",
        "population": 48
    },
    {
        "iso": "LK",
        "english_name": "Sri Lanka",
        "native_name": "Sri Lanka",
        "population": 6
    },
    {
        "iso": "SD",
        "english_name": "Sudan",
        "native_name": "Sudan",
        "population": 13
    },
    {
        "iso": "SR",
        "english_name": "Suriname",
        "native_name": "Suriname",
        "population": 1
    },
    {
        "iso": "SE",
        "english_name": "Sweden",
        "native_name": "Sweden",
        "population": 10
    },
    {
        "iso": "CH",
        "english_name": "Switzerland",
        "native_name": "Switzerland",
        "population": 10
    },
    {
        "iso": "SY",
        "english_name": "Syria",
        "native_name": "Syria",
        "population": 8
    },
    {
        "iso": "TW",
        "english_name": "Taiwan",
        "native_name": "Taiwan",
        "population": 23
    },
    {
        "iso": "TJ",
        "english_name": "Tajikistan",
        "native_name": "Tajikistan",
        "population": 3
    },
    {
        "iso": "TZ",
        "english_name": "Tanzania",
        "native_name": "Tanzania",
        "population": 6
    },
    {
        "iso": "TH",
        "english_name": "Thailand",
        "native_name": "Thailand",
        "population": 61
    },
    {
        "iso": "TG",
        "english_name": "Togo",
        "native_name": "Togo",
        "population": 3
    },
    {
        "iso": "TN",
        "english_name": "Tunisia",
        "native_name": "Tunisia",
        "population": 9
    },
    {
        "iso": "TR",
        "english_name": "Turkey",
        "native_name": "Turkey",
        "population": 68
    },
    {
        "iso": "TM",
        "english_name": "Turkmenistan",
        "native_name": "Turkmenistan",
        "population": 2
    },
    {
        "iso": "UG",
        "english_name": "Uganda",
        "native_name": "Uganda",
        "population": 5
    },
    {
        "iso": "UA",
        "english_name": "Ukraine",
        "native_name": "Ukraine",
        "population": 33
    },
    {
        "iso": "AE",
        "english_name": "United Arab Emirates",
        "native_name": "United Arab Emirates",
        "population": 10
    },
    {
        "iso": "GB",
        "english_name": "United Kingdom",
        "native_name": "United Kingdom",
        "population": 68
    },
    {
        "iso": "US",
        "english_name": "United States",
        "native_name": "United States",
        "population": 340
    },
    {
        "iso": "UY",
        "english_name": "Uruguay",
        "native_name": "Uruguay",
        "population": 10
    },
    {
        "iso": "UZ",
        "english_name": "Uzbekistan",
        "native_name": "Uzbekistan",
        "population": 7
    },
    {
        "iso": "VA",
        "english_name": "Vatican",
        "native_name": "Vatican City",
        "population": 1
    },
    {
        "iso": "VE",
        "english_name": "Venezuela",
        "native_name": "Venezuela",
        "population": 22
    },
    {
        "iso": "VN",
        "english_name": "Vietnam",
        "native_name": "Vietnam",
        "population": 33
    },
    {
        "iso": "YE",
        "english_name": "Yemen",
        "native_name": "Yemen",
        "population": 1
    },
    {
        "iso": "YU",
        "english_name": "Yugoslavia",
        "native_name": "Yugoslavia",
        "population": 23
    },
    {
        "iso": "ZM",
        "english_name": "Zambia",
        "native_name": "Zambia",
        "population": 2
    },
    {
        "iso": "ZW",
        "english_name": "Zimbabwe",
        "native_name": "Zimbabwe",
        "population": 2
    }
]

export default all_countries;