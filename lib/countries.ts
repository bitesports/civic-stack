// Country data for L2States page
// Excludes OFAC-sanctioned nations: Cuba, Iran, North Korea, Syria, Russia, Belarus, Crimea

export interface Country {
  name: string;
  iso: string;
  flag: string;
  population: number; // in millions
  region: string;
}

// OFAC sanctioned countries to exclude
export const OFAC_COUNTRIES = [
  "CUB", // Cuba
  "IRN", // Iran
  "PRK", // North Korea
  "SYR", // Syria
  "RUS", // Russia
  "BLR", // Belarus
];

export const countries: Country[] = [
  // Africa
  { name: "Algeria", iso: "DZA", flag: "🇩🇿", population: 45.6, region: "Africa" },
  { name: "Angola", iso: "AGO", flag: "🇦🇴", population: 35.6, region: "Africa" },
  { name: "Benin", iso: "BEN", flag: "🇧🇯", population: 13.3, region: "Africa" },
  { name: "Botswana", iso: "BWA", flag: "🇧🇼", population: 2.6, region: "Africa" },
  { name: "Burkina Faso", iso: "BFA", flag: "🇧🇫", population: 22.7, region: "Africa" },
  { name: "Burundi", iso: "BDI", flag: "🇧🇮", population: 12.9, region: "Africa" },
  { name: "Cameroon", iso: "CMR", flag: "🇨🇲", population: 28.6, region: "Africa" },
  { name: "Cape Verde", iso: "CPV", flag: "🇨🇻", population: 0.6, region: "Africa" },
  { name: "Central African Republic", iso: "CAF", flag: "🇨🇫", population: 5.5, region: "Africa" },
  { name: "Chad", iso: "TCD", flag: "🇹🇩", population: 17.7, region: "Africa" },
  { name: "Comoros", iso: "COM", flag: "🇰🇲", population: 0.9, region: "Africa" },
  { name: "Democratic Republic of the Congo", iso: "COD", flag: "🇨🇩", population: 99.0, region: "Africa" },
  { name: "Republic of the Congo", iso: "COG", flag: "🇨🇬", population: 6.0, region: "Africa" },
  { name: "Côte d'Ivoire", iso: "CIV", flag: "🇨🇮", population: 28.2, region: "Africa" },
  { name: "Djibouti", iso: "DJI", flag: "🇩🇯", population: 1.1, region: "Africa" },
  { name: "Egypt", iso: "EGY", flag: "🇪🇬", population: 109.3, region: "Africa" },
  { name: "Equatorial Guinea", iso: "GNQ", flag: "🇬🇶", population: 1.7, region: "Africa" },
  { name: "Eritrea", iso: "ERI", flag: "🇪🇷", population: 3.7, region: "Africa" },
  { name: "Eswatini", iso: "SWZ", flag: "🇸🇿", population: 1.2, region: "Africa" },
  { name: "Ethiopia", iso: "ETH", flag: "🇪🇹", population: 123.4, region: "Africa" },
  { name: "Gabon", iso: "GAB", flag: "🇬🇦", population: 2.4, region: "Africa" },
  { name: "Gambia", iso: "GMB", flag: "🇬🇲", population: 2.6, region: "Africa" },
  { name: "Ghana", iso: "GHA", flag: "🇬🇭", population: 33.5, region: "Africa" },
  { name: "Guinea", iso: "GIN", flag: "🇬🇳", population: 14.2, region: "Africa" },
  { name: "Guinea-Bissau", iso: "GNB", flag: "🇬🇼", population: 2.1, region: "Africa" },
  { name: "Kenya", iso: "KEN", flag: "🇰🇪", population: 54.0, region: "Africa" },
  { name: "Lesotho", iso: "LSO", flag: "🇱🇸", population: 2.3, region: "Africa" },
  { name: "Liberia", iso: "LBR", flag: "🇱🇷", population: 5.4, region: "Africa" },
  { name: "Libya", iso: "LBY", flag: "🇱🇾", population: 7.0, region: "Africa" },
  { name: "Madagascar", iso: "MDG", flag: "🇲🇬", population: 30.3, region: "Africa" },
  { name: "Malawi", iso: "MWI", flag: "🇲🇼", population: 20.4, region: "Africa" },
  { name: "Mali", iso: "MLI", flag: "🇲🇱", population: 22.6, region: "Africa" },
  { name: "Mauritania", iso: "MRT", flag: "🇲🇷", population: 4.9, region: "Africa" },
  { name: "Mauritius", iso: "MUS", flag: "🇲🇺", population: 1.3, region: "Africa" },
  { name: "Morocco", iso: "MAR", flag: "🇲🇦", population: 37.5, region: "Africa" },
  { name: "Mozambique", iso: "MOZ", flag: "🇲🇿", population: 32.8, region: "Africa" },
  { name: "Namibia", iso: "NAM", flag: "🇳🇦", population: 2.6, region: "Africa" },
  { name: "Niger", iso: "NER", flag: "🇳🇪", population: 26.2, region: "Africa" },
  { name: "Nigeria", iso: "NGA", flag: "🇳🇬", population: 223.8, region: "Africa" },
  { name: "Rwanda", iso: "RWA", flag: "🇷🇼", population: 14.1, region: "Africa" },
  { name: "São Tomé and Príncipe", iso: "STP", flag: "🇸🇹", population: 0.2, region: "Africa" },
  { name: "Senegal", iso: "SEN", flag: "🇸🇳", population: 17.7, region: "Africa" },
  { name: "Seychelles", iso: "SYC", flag: "🇸🇨", population: 0.1, region: "Africa" },
  { name: "Sierra Leone", iso: "SLE", flag: "🇸🇱", population: 8.6, region: "Africa" },
  { name: "Somalia", iso: "SOM", flag: "🇸🇴", population: 18.1, region: "Africa" },
  { name: "South Africa", iso: "ZAF", flag: "🇿🇦", population: 60.4, region: "Africa" },
  { name: "South Sudan", iso: "SSD", flag: "🇸🇸", population: 11.4, region: "Africa" },
  { name: "Sudan", iso: "SDN", flag: "🇸🇩", population: 46.8, region: "Africa" },
  { name: "Tanzania", iso: "TZA", flag: "🇹🇿", population: 65.5, region: "Africa" },
  { name: "Togo", iso: "TGO", flag: "🇹🇬", population: 8.8, region: "Africa" },
  { name: "Tunisia", iso: "TUN", flag: "🇹🇳", population: 12.4, region: "Africa" },
  { name: "Uganda", iso: "UGA", flag: "🇺🇬", population: 48.6, region: "Africa" },
  { name: "Zambia", iso: "ZMB", flag: "🇿🇲", population: 20.6, region: "Africa" },
  { name: "Zimbabwe", iso: "ZWE", flag: "🇿🇼", population: 16.3, region: "Africa" },

  // Americas
  { name: "Antigua and Barbuda", iso: "ATG", flag: "🇦🇬", population: 0.1, region: "Americas" },
  { name: "Argentina", iso: "ARG", flag: "🇦🇷", population: 45.8, region: "Americas" },
  { name: "Bahamas", iso: "BHS", flag: "🇧🇸", population: 0.4, region: "Americas" },
  { name: "Barbados", iso: "BRB", flag: "🇧🇧", population: 0.3, region: "Americas" },
  { name: "Belize", iso: "BLZ", flag: "🇧🇿", population: 0.4, region: "Americas" },
  { name: "Bolivia", iso: "BOL", flag: "🇧🇴", population: 12.2, region: "Americas" },
  { name: "Brazil", iso: "BRA", flag: "🇧🇷", population: 216.4, region: "Americas" },
  { name: "Canada", iso: "CAN", flag: "🇨🇦", population: 40.1, region: "Americas" },
  { name: "Chile", iso: "CHL", flag: "🇨🇱", population: 19.6, region: "Americas" },
  { name: "Colombia", iso: "COL", flag: "🇨🇴", population: 52.2, region: "Americas" },
  { name: "Costa Rica", iso: "CRI", flag: "🇨🇷", population: 5.2, region: "Americas" },
  { name: "Dominica", iso: "DMA", flag: "🇩🇲", population: 0.1, region: "Americas" },
  { name: "Dominican Republic", iso: "DOM", flag: "🇩🇴", population: 11.3, region: "Americas" },
  { name: "Ecuador", iso: "ECU", flag: "🇪🇨", population: 18.2, region: "Americas" },
  { name: "El Salvador", iso: "SLV", flag: "🇸🇻", population: 6.4, region: "Americas" },
  { name: "Grenada", iso: "GRD", flag: "🇬🇩", population: 0.1, region: "Americas" },
  { name: "Guatemala", iso: "GTM", flag: "🇬🇹", population: 18.1, region: "Americas" },
  { name: "Guyana", iso: "GUY", flag: "🇬🇾", population: 0.8, region: "Americas" },
  { name: "Haiti", iso: "HTI", flag: "🇭🇹", population: 11.7, region: "Americas" },
  { name: "Honduras", iso: "HND", flag: "🇭🇳", population: 10.4, region: "Americas" },
  { name: "Jamaica", iso: "JAM", flag: "🇯🇲", population: 2.8, region: "Americas" },
  { name: "Mexico", iso: "MEX", flag: "🇲🇽", population: 128.9, region: "Americas" },
  { name: "Nicaragua", iso: "NIC", flag: "🇳🇮", population: 7.0, region: "Americas" },
  { name: "Panama", iso: "PAN", flag: "🇵🇦", population: 4.5, region: "Americas" },
  { name: "Paraguay", iso: "PRY", flag: "🇵🇾", population: 6.8, region: "Americas" },
  { name: "Peru", iso: "PER", flag: "🇵🇪", population: 34.4, region: "Americas" },
  { name: "Saint Kitts and Nevis", iso: "KNA", flag: "🇰🇳", population: 0.05, region: "Americas" },
  { name: "Saint Lucia", iso: "LCA", flag: "🇱🇨", population: 0.2, region: "Americas" },
  { name: "Saint Vincent and the Grenadines", iso: "VCT", flag: "🇻🇨", population: 0.1, region: "Americas" },
  { name: "Suriname", iso: "SUR", flag: "🇸🇷", population: 0.6, region: "Americas" },
  { name: "Trinidad and Tobago", iso: "TTO", flag: "🇹🇹", population: 1.5, region: "Americas" },
  { name: "United States", iso: "USA", flag: "🇺🇸", population: 339.9, region: "Americas" },
  { name: "Uruguay", iso: "URY", flag: "🇺🇾", population: 3.4, region: "Americas" },
  { name: "Venezuela", iso: "VEN", flag: "🇻🇪", population: 28.4, region: "Americas" },

  // Asia
  { name: "Afghanistan", iso: "AFG", flag: "🇦🇫", population: 42.2, region: "Asia" },
  { name: "Armenia", iso: "ARM", flag: "🇦🇲", population: 2.8, region: "Asia" },
  { name: "Azerbaijan", iso: "AZE", flag: "🇦🇿", population: 10.4, region: "Asia" },
  { name: "Bahrain", iso: "BHR", flag: "🇧🇭", population: 1.5, region: "Asia" },
  { name: "Bangladesh", iso: "BGD", flag: "🇧🇩", population: 172.9, region: "Asia" },
  { name: "Bhutan", iso: "BTN", flag: "🇧🇹", population: 0.8, region: "Asia" },
  { name: "Brunei", iso: "BRN", flag: "🇧🇳", population: 0.5, region: "Asia" },
  { name: "Cambodia", iso: "KHM", flag: "🇰🇭", population: 16.9, region: "Asia" },
  { name: "China", iso: "CHN", flag: "🇨🇳", population: 1425.7, region: "Asia" },
  { name: "Georgia", iso: "GEO", flag: "🇬🇪", population: 3.7, region: "Asia" },
  { name: "India", iso: "IND", flag: "🇮🇳", population: 1428.6, region: "Asia" },
  { name: "Indonesia", iso: "IDN", flag: "🇮🇩", population: 277.5, region: "Asia" },
  { name: "Iraq", iso: "IRQ", flag: "🇮🇶", population: 44.5, region: "Asia" },
  { name: "Israel", iso: "ISR", flag: "🇮🇱", population: 9.2, region: "Asia" },
  { name: "Japan", iso: "JPN", flag: "🇯🇵", population: 125.1, region: "Asia" },
  { name: "Jordan", iso: "JOR", flag: "🇯🇴", population: 11.3, region: "Asia" },
  { name: "Kazakhstan", iso: "KAZ", flag: "🇰🇿", population: 19.6, region: "Asia" },
  { name: "Kuwait", iso: "KWT", flag: "🇰🇼", population: 4.3, region: "Asia" },
  { name: "Kyrgyzstan", iso: "KGZ", flag: "🇰🇬", population: 6.7, region: "Asia" },
  { name: "Laos", iso: "LAO", flag: "🇱🇦", population: 7.5, region: "Asia" },
  { name: "Lebanon", iso: "LBN", flag: "🇱🇧", population: 5.5, region: "Asia" },
  { name: "Malaysia", iso: "MYS", flag: "🇲🇾", population: 34.3, region: "Asia" },
  { name: "Maldives", iso: "MDV", flag: "🇲🇻", population: 0.5, region: "Asia" },
  { name: "Mongolia", iso: "MNG", flag: "🇲🇳", population: 3.4, region: "Asia" },
  { name: "Myanmar", iso: "MMR", flag: "🇲🇲", population: 54.6, region: "Asia" },
  { name: "Nepal", iso: "NPL", flag: "🇳🇵", population: 30.9, region: "Asia" },
  { name: "Oman", iso: "OMN", flag: "🇴🇲", population: 4.6, region: "Asia" },
  { name: "Pakistan", iso: "PAK", flag: "🇵🇰", population: 240.5, region: "Asia" },
  { name: "Palestine", iso: "PSE", flag: "🇵🇸", population: 5.4, region: "Asia" },
  { name: "Philippines", iso: "PHL", flag: "🇵🇭", population: 117.3, region: "Asia" },
  { name: "Qatar", iso: "QAT", flag: "🇶🇦", population: 2.7, region: "Asia" },
  { name: "Saudi Arabia", iso: "SAU", flag: "🇸🇦", population: 36.4, region: "Asia" },
  { name: "Singapore", iso: "SGP", flag: "🇸🇬", population: 6.0, region: "Asia" },
  { name: "South Korea", iso: "KOR", flag: "🇰🇷", population: 51.8, region: "Asia" },
  { name: "Sri Lanka", iso: "LKA", flag: "🇱🇰", population: 21.9, region: "Asia" },
  { name: "Taiwan", iso: "TWN", flag: "🇹🇼", population: 23.9, region: "Asia" },
  { name: "Tajikistan", iso: "TJK", flag: "🇹🇯", population: 10.1, region: "Asia" },
  { name: "Thailand", iso: "THA", flag: "🇹🇭", population: 71.8, region: "Asia" },
  { name: "Timor-Leste", iso: "TLS", flag: "🇹🇱", population: 1.4, region: "Asia" },
  { name: "Turkey", iso: "TUR", flag: "🇹🇷", population: 85.3, region: "Asia" },
  { name: "Turkmenistan", iso: "TKM", flag: "🇹🇲", population: 6.5, region: "Asia" },
  { name: "United Arab Emirates", iso: "ARE", flag: "🇦🇪", population: 9.4, region: "Asia" },
  { name: "Uzbekistan", iso: "UZB", flag: "🇺🇿", population: 35.2, region: "Asia" },
  { name: "Vietnam", iso: "VNM", flag: "🇻🇳", population: 98.9, region: "Asia" },
  { name: "Yemen", iso: "YEM", flag: "🇾🇪", population: 34.4, region: "Asia" },

  // Europe
  { name: "Albania", iso: "ALB", flag: "🇦🇱", population: 2.8, region: "Europe" },
  { name: "Andorra", iso: "AND", flag: "🇦🇩", population: 0.08, region: "Europe" },
  { name: "Austria", iso: "AUT", flag: "🇦🇹", population: 9.1, region: "Europe" },
  { name: "Belgium", iso: "BEL", flag: "🇧🇪", population: 11.7, region: "Europe" },
  { name: "Bosnia and Herzegovina", iso: "BIH", flag: "🇧🇦", population: 3.2, region: "Europe" },
  { name: "Bulgaria", iso: "BGR", flag: "🇧🇬", population: 6.5, region: "Europe" },
  { name: "Croatia", iso: "HRV", flag: "🇭🇷", population: 3.9, region: "Europe" },
  { name: "Cyprus", iso: "CYP", flag: "🇨🇾", population: 1.3, region: "Europe" },
  { name: "Czech Republic", iso: "CZE", flag: "🇨🇿", population: 10.5, region: "Europe" },
  { name: "Denmark", iso: "DNK", flag: "🇩🇰", population: 5.9, region: "Europe" },
  { name: "Estonia", iso: "EST", flag: "🇪🇪", population: 1.4, region: "Europe" },
  { name: "Finland", iso: "FIN", flag: "🇫🇮", population: 5.5, region: "Europe" },
  { name: "France", iso: "FRA", flag: "🇫🇷", population: 64.8, region: "Europe" },
  { name: "Germany", iso: "DEU", flag: "🇩🇪", population: 84.5, region: "Europe" },
  { name: "Greece", iso: "GRC", flag: "🇬🇷", population: 10.4, region: "Europe" },
  { name: "Hungary", iso: "HUN", flag: "🇭🇺", population: 9.6, region: "Europe" },
  { name: "Iceland", iso: "ISL", flag: "🇮🇸", population: 0.4, region: "Europe" },
  { name: "Ireland", iso: "IRL", flag: "🇮🇪", population: 5.1, region: "Europe" },
  { name: "Italy", iso: "ITA", flag: "🇮🇹", population: 58.9, region: "Europe" },
  { name: "Kosovo", iso: "XKX", flag: "🇽🇰", population: 1.8, region: "Europe" },
  { name: "Latvia", iso: "LVA", flag: "🇱🇻", population: 1.8, region: "Europe" },
  { name: "Liechtenstein", iso: "LIE", flag: "🇱🇮", population: 0.04, region: "Europe" },
  { name: "Lithuania", iso: "LTU", flag: "🇱🇹", population: 2.7, region: "Europe" },
  { name: "Luxembourg", iso: "LUX", flag: "🇱🇺", population: 0.7, region: "Europe" },
  { name: "Malta", iso: "MLT", flag: "🇲🇹", population: 0.5, region: "Europe" },
  { name: "Moldova", iso: "MDA", flag: "🇲🇩", population: 2.5, region: "Europe" },
  { name: "Monaco", iso: "MCO", flag: "🇲🇨", population: 0.04, region: "Europe" },
  { name: "Montenegro", iso: "MNE", flag: "🇲🇪", population: 0.6, region: "Europe" },
  { name: "Netherlands", iso: "NLD", flag: "🇳🇱", population: 17.6, region: "Europe" },
  { name: "North Macedonia", iso: "MKD", flag: "🇲🇰", population: 2.1, region: "Europe" },
  { name: "Norway", iso: "NOR", flag: "🇳🇴", population: 5.5, region: "Europe" },
  { name: "Poland", iso: "POL", flag: "🇵🇱", population: 36.8, region: "Europe" },
  { name: "Portugal", iso: "PRT", flag: "🇵🇹", population: 10.4, region: "Europe" },
  { name: "Romania", iso: "ROU", flag: "🇷🇴", population: 19.0, region: "Europe" },
  { name: "San Marino", iso: "SMR", flag: "🇸🇲", population: 0.03, region: "Europe" },
  { name: "Serbia", iso: "SRB", flag: "🇷🇸", population: 6.6, region: "Europe" },
  { name: "Slovakia", iso: "SVK", flag: "🇸🇰", population: 5.4, region: "Europe" },
  { name: "Slovenia", iso: "SVN", flag: "🇸🇮", population: 2.1, region: "Europe" },
  { name: "Spain", iso: "ESP", flag: "🇪🇸", population: 47.6, region: "Europe" },
  { name: "Sweden", iso: "SWE", flag: "🇸🇪", population: 10.5, region: "Europe" },
  { name: "Switzerland", iso: "CHE", flag: "🇨🇭", population: 8.8, region: "Europe" },
  { name: "Ukraine", iso: "UKR", flag: "🇺🇦", population: 37.0, region: "Europe" },
  { name: "United Kingdom", iso: "GBR", flag: "🇬🇧", population: 67.7, region: "Europe" },
  { name: "Vatican City", iso: "VAT", flag: "🇻🇦", population: 0.0008, region: "Europe" },

  // Oceania
  { name: "Australia", iso: "AUS", flag: "🇦🇺", population: 26.4, region: "Oceania" },
  { name: "Fiji", iso: "FJI", flag: "🇫🇯", population: 0.9, region: "Oceania" },
  { name: "Kiribati", iso: "KIR", flag: "🇰🇮", population: 0.1, region: "Oceania" },
  { name: "Marshall Islands", iso: "MHL", flag: "🇲🇭", population: 0.04, region: "Oceania" },
  { name: "Micronesia", iso: "FSM", flag: "🇫🇲", population: 0.1, region: "Oceania" },
  { name: "Nauru", iso: "NRU", flag: "🇳🇷", population: 0.01, region: "Oceania" },
  { name: "New Zealand", iso: "NZL", flag: "🇳🇿", population: 5.2, region: "Oceania" },
  { name: "Palau", iso: "PLW", flag: "🇵🇼", population: 0.02, region: "Oceania" },
  { name: "Papua New Guinea", iso: "PNG", flag: "🇵🇬", population: 10.1, region: "Oceania" },
  { name: "Samoa", iso: "WSM", flag: "🇼🇸", population: 0.2, region: "Oceania" },
  { name: "Solomon Islands", iso: "SLB", flag: "🇸🇧", population: 0.7, region: "Oceania" },
  { name: "Tonga", iso: "TON", flag: "🇹🇴", population: 0.1, region: "Oceania" },
  { name: "Tuvalu", iso: "TUV", flag: "🇹🇻", population: 0.01, region: "Oceania" },
  { name: "Vanuatu", iso: "VUT", flag: "🇻🇺", population: 0.3, region: "Oceania" },
];

// Get all unique regions
export const regions = [...new Set(countries.map(c => c.region))];

// Helper to format population
export function formatPopulation(pop: number): string {
  if (pop >= 1000) {
    return `${(pop / 1000).toFixed(1)}B`;
  }
  if (pop >= 1) {
    return `${pop.toFixed(1)}M`;
  }
  return `${Math.round(pop * 1000)}K`;
}

// Generate Perplexity search URL for country + web3
export function getPerplexityUrl(countryName: string): string {
  const query = encodeURIComponent(`${countryName} web3 blockchain cryptocurrency adoption regulations`);
  return `https://www.perplexity.ai/search?q=${query}`;
}

