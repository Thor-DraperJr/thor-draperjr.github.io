export interface RailStation {
  id: string;
  name: string;
  lines: string[];
  lat: number;
  lng: number;
  note: string;
}

export interface RailGuide {
  stationId: string;
  estimatedWalkMinutes: number;
  directionsUrl: string;
  station: RailStation;
}

export interface ArtsVenue {
  id: string;
  name: string;
  siteUrl: string;
  address: string;
  lat: number;
  lng: number;
  category: 'performance' | 'museum' | 'studio';
  filterGroup: 'uptown' | 'north-blue' | 'south-blue' | 'outer-loop';
  areaLabel: string;
  organizations: string[];
  note: string;
  railGuides: RailGuide[];
  primaryRailGuide?: RailGuide;
}

interface BaseVenue extends Omit<ArtsVenue, 'railGuides' | 'primaryRailGuide'> {
  railStationIds: string[];
}

export const artsMapCenter = {
  lat: 35.2258,
  lng: -80.8448,
};

export const artsMapFilters = [
  { id: 'all', label: 'All Spots' },
  { id: 'uptown', label: 'Uptown' },
  { id: 'north-blue', label: 'North Blue' },
  { id: 'south-blue', label: 'South Blue' },
  { id: 'outer-loop', label: 'Other' },
] as const;

export const artsRailStations: RailStation[] = [
  {
    id: 'seventh-street',
    name: '7th Street',
    lines: ['Blue'],
    lat: 35.2275737,
    lng: -80.8384749,
    note: 'Usually the cleanest Blue Line stop for the North Tryon side of Uptown.',
  },
  {
    id: 'ctc-arena',
    name: 'CTC/Arena',
    lines: ['Blue', 'Gold'],
    lat: 35.2253394,
    lng: -80.8408676,
    note: 'Good shared Blue and Gold Line anchor when I want the easiest transfer point.',
  },
  {
    id: 'third-convention',
    name: '3rd Street/Convention Center',
    lines: ['Blue'],
    lat: 35.2237567,
    lng: -80.8430188,
    note: 'Clean Blue Line option for South Tryon museums and Knight Theater.',
  },
  {
    id: 'brooklyn-village',
    name: 'Brooklyn Village',
    lines: ['Blue'],
    lat: 35.2213158,
    lng: -80.8470473,
    note: 'Usually the shortest Blue Line walk for the Levine Center cluster.',
  },
  {
    id: 'parkwood',
    name: 'Parkwood',
    lines: ['Blue'],
    lat: 35.2368811,
    lng: -80.8233203,
    note: 'Closest Blue Line anchor for Camp North End and the nearby warehouse-art cluster.',
  },
  {
    id: 'thirtysix-street',
    name: '36th Street',
    lines: ['Blue'],
    lat: 35.2491277,
    lng: -80.8061858,
    note: 'Best Blue Line stop for NoDa music venues and the walkable arts district feel.',
  },
  {
    id: 'sugar-creek',
    name: 'Sugar Creek',
    lines: ['Blue'],
    lat: 35.2514112,
    lng: -80.7929031,
    note: 'Closest Blue Line stop for the Raleigh Street film and gallery cluster.',
  },
  {
    id: 'east-west',
    name: 'East/West Boulevard',
    lines: ['Blue'],
    lat: 35.2122117,
    lng: -80.8589291,
    note: 'Clean South End stop for gallery visits and Rail Trail wandering.',
  },
  {
    id: 'bland-street',
    name: 'Bland Street',
    lines: ['Blue'],
    lat: 35.2157775,
    lng: -80.8551939,
    note: 'Backup South End stop when the venue sits closer to upper Camden or South Boulevard.',
  },
];

const baseVenues: BaseVenue[] = [
  {
    id: 'belk-theater',
    name: 'Belk Theater',
    siteUrl: 'https://www.blumenthalarts.org/venues/detail/belk-theater',
    address: '130 N. Tryon Street, Charlotte, NC 28202',
    lat: 35.2273935,
    lng: -80.8416520,
    category: 'performance',
    filterGroup: 'uptown',
    areaLabel: 'Uptown',
    organizations: ['Blumenthal Arts', 'Charlotte Symphony', 'Opera Carolina'],
    note: 'This is one of the main Uptown performance anchors, so it pulls a lot of weight.',
    railStationIds: ['ctc-arena', 'seventh-street'],
  },
  {
    id: 'knight-theater',
    name: 'Knight Theater',
    siteUrl: 'https://www.blumenthalarts.org/venues/detail/knight-theater',
    address: '430 S. Tryon Street, Charlotte, NC 28202',
    lat: 35.2249032,
    lng: -80.8478716,
    category: 'performance',
    filterGroup: 'uptown',
    areaLabel: 'Uptown',
    organizations: ['Blumenthal Arts', 'Charlotte Symphony', 'Opera Carolina'],
    note: 'If the plan is a big-ticket night in the Levine Center area, this is usually the move.',
    railStationIds: ['brooklyn-village', 'third-convention'],
  },
  {
    id: 'charlotte-ballet',
    name: 'Charlotte Ballet',
    siteUrl: 'https://charlotteballet.org/',
    address: '701 N. Tryon Street, Charlotte, NC 28202',
    lat: 35.2323052,
    lng: -80.8365005,
    category: 'performance',
    filterGroup: 'uptown',
    areaLabel: 'Uptown',
    organizations: ['Charlotte Ballet'],
    note: 'Main company and academy address, which makes it useful to keep pinned even when the actual performance venue changes.',
    railStationIds: ['seventh-street', 'ctc-arena'],
  },
  {
    id: 'jazzarts-charlotte',
    name: 'JazzArts Charlotte at VAPA Center',
    siteUrl: 'https://www.thejazzarts.org/',
    address: '700 N. Tryon Street, Charlotte, NC 28202',
    lat: 35.2316922,
    lng: -80.8354536,
    category: 'performance',
    filterGroup: 'uptown',
    areaLabel: 'Uptown',
    organizations: ['JazzArts Charlotte'],
    note: 'Good North Tryon spot when I want live music without the full formal-night overhead.',
    railStationIds: ['seventh-street', 'ctc-arena'],
  },
  {
    id: 'mint-uptown',
    name: 'Mint Museum Uptown',
    siteUrl: 'https://www.mintmuseum.org/plan-your-visit/mint-museum-uptown/',
    address: '500 S. Tryon Street, Charlotte, NC 28202',
    lat: 35.2246048,
    lng: -80.8484481,
    category: 'museum',
    filterGroup: 'uptown',
    areaLabel: 'Uptown',
    organizations: ['Mint Museum'],
    note: 'Easy museum anchor for a South Tryon afternoon because it stacks nicely with the rest of the cluster.',
    railStationIds: ['brooklyn-village', 'third-convention'],
  },
  {
    id: 'bechtler',
    name: 'Bechtler Museum of Modern Art',
    siteUrl: 'https://www.bechtler.org/visit',
    address: '420 S. Tryon Street, Charlotte, NC 28202',
    lat: 35.2245882,
    lng: -80.8474049,
    category: 'museum',
    filterGroup: 'uptown',
    areaLabel: 'Uptown',
    organizations: ['Bechtler Museum of Modern Art'],
    note: 'This is the modern-art stop in the Uptown cluster, and the music programming makes it better than a quick pass-through.',
    railStationIds: ['brooklyn-village', 'third-convention'],
  },
  {
    id: 'gantt-center',
    name: 'Harvey B. Gantt Center',
    siteUrl: 'https://ganttcenter.org/visit-the-gantt/',
    address: '551 S. Tryon Street, Charlotte, NC 28202',
    lat: 35.2232374,
    lng: -80.8480295,
    category: 'museum',
    filterGroup: 'uptown',
    areaLabel: 'Uptown',
    organizations: ['Harvey B. Gantt Center'],
    note: 'Worth keeping in the South Tryon rotation because it is more than just a quick exhibition stop.',
    railStationIds: ['brooklyn-village', 'third-convention'],
  },
  {
    id: 'mccoll-center',
    name: 'McColl Center',
    siteUrl: 'https://mccollcenter.org/',
    address: '721 N. Tryon Street, Charlotte, NC 28202',
    lat: 35.2327575,
    lng: -80.8362302,
    category: 'museum',
    filterGroup: 'uptown',
    areaLabel: 'Uptown',
    organizations: ['McColl Center'],
    note: 'Strong pick if I want galleries, artist residencies, and a place that feels like Charlotte art is actively being made there.',
    railStationIds: ['seventh-street', 'ctc-arena'],
  },
  {
    id: 'neighborhood-theatre',
    name: 'Neighborhood Theatre',
    siteUrl: 'https://neighborhoodtheatre.com/',
    address: '511 E. 36th Street, Charlotte, NC 28205',
    lat: 35.2474854,
    lng: -80.8039246,
    category: 'performance',
    filterGroup: 'north-blue',
    areaLabel: 'NoDa',
    organizations: ['Neighborhood Theatre'],
    note: 'Easy NoDa concert-night option and one of the cleanest reasons to ride farther up the Blue Line.',
    railStationIds: ['thirtysix-street', 'sugar-creek'],
  },
  {
    id: 'queen-city-art',
    name: 'Queen City Art',
    siteUrl: 'https://queencityart.org/',
    address: '4237 Raleigh Street, Suite 5, Charlotte, NC 28213',
    lat: 35.2539746,
    lng: -80.7900045,
    category: 'museum',
    filterGroup: 'north-blue',
    areaLabel: 'Sugar Creek',
    organizations: ['Queen City Art'],
    note: 'This is the Charlotte Art League legacy space, so it is a good gallery stop when I want something local and community-rooted.',
    railStationIds: ['sugar-creek', 'thirtysix-street'],
  },
  {
    id: 'independent-picture-house',
    name: 'Independent Picture House',
    siteUrl: 'https://independentpicturehouse.org/',
    address: '4237 Raleigh Street, Charlotte, NC 28213',
    lat: 35.2537856,
    lng: -80.7900702,
    category: 'performance',
    filterGroup: 'north-blue',
    areaLabel: 'Sugar Creek',
    organizations: ['Independent Picture House'],
    note: 'Good film-first option when I want something artsy without defaulting to a live show or museum.',
    railStationIds: ['sugar-creek', 'thirtysix-street'],
  },
  {
    id: 'camp-north-end',
    name: 'Camp North End',
    siteUrl: 'https://camp.nc/',
    address: '1824 Statesville Avenue, Charlotte, NC 28206',
    lat: 35.2476597,
    lng: -80.8326313,
    category: 'studio',
    filterGroup: 'north-blue',
    areaLabel: 'Parkwood',
    organizations: ['Camp North End'],
    note: 'This is more creative district than single venue, which is exactly why it works when I want to wander, eat, and run into art on purpose.',
    railStationIds: ['parkwood', 'seventh-street'],
  },
  {
    id: 'goodyear-arts',
    name: 'Goodyear Arts',
    siteUrl: 'https://goodyeararts.com/',
    address: '301 Camp Road, Suite 200, Charlotte, NC 28206',
    lat: 35.2457871,
    lng: -80.8341269,
    category: 'studio',
    filterGroup: 'north-blue',
    areaLabel: 'Parkwood',
    organizations: ['Goodyear Arts'],
    note: 'Artist-run, free, and multidisciplinary. This is one of the better north-side picks if I want something a little more experimental.',
    railStationIds: ['parkwood', 'seventh-street'],
  },
  {
    id: 'se-clt-gallery',
    name: 'SE CLT Gallery',
    siteUrl: 'https://www.seclt.com/',
    address: '2137 South Boulevard, Suite 350, Charlotte, NC 28203',
    lat: 35.2074010,
    lng: -80.8604585,
    category: 'museum',
    filterGroup: 'south-blue',
    areaLabel: 'South End',
    organizations: ['SE CLT Gallery'],
    note: 'Simple South End gallery stop for when I want something artsy without committing to a whole museum day.',
    railStationIds: ['east-west', 'bland-street'],
  },
  {
    id: 'blume-studios',
    name: 'Blume Studios',
    siteUrl: 'https://www.blumenthalarts.org/visit/blume-studios',
    address: '904 Post Street, Charlotte, NC 28208',
    lat: 35.2263594,
    lng: -80.8592041,
    category: 'studio',
    filterGroup: 'outer-loop',
    areaLabel: 'Outer Loop',
    organizations: ['Blumenthal Arts'],
    note: 'Not in the tight Tryon cluster, but still close enough that it is worth keeping on the same map.',
    railStationIds: ['brooklyn-village'],
  },
  {
    id: 'opera-carolina',
    name: 'Opera Carolina Opera Center',
    siteUrl: 'https://www.operacarolina.org/visit/',
    address: '1600 Elizabeth Avenue, Charlotte, NC 28204',
    lat: 35.2142078,
    lng: -80.8273533,
    category: 'performance',
    filterGroup: 'outer-loop',
    areaLabel: 'Outer Loop',
    organizations: ['Opera Carolina'],
    note: 'Good to keep pinned as the company home base, even though actual show nights are often easier because they land back in Uptown venues.',
    railStationIds: ['ctc-arena'],
  },
];

function toRadians(value: number): number {
  return (value * Math.PI) / 180;
}

function estimateWalkMinutes(
  originLat: number,
  originLng: number,
  destinationLat: number,
  destinationLng: number,
): number {
  const earthRadiusMiles = 3958.8;
  const latitudeDelta = toRadians(destinationLat - originLat);
  const longitudeDelta = toRadians(destinationLng - originLng);

  const a =
    Math.sin(latitudeDelta / 2) ** 2 +
    Math.cos(toRadians(originLat)) *
      Math.cos(toRadians(destinationLat)) *
      Math.sin(longitudeDelta / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const straightLineMiles = earthRadiusMiles * c;
  const cityWalkingMiles = straightLineMiles * 1.26;

  return Math.max(3, Math.round(cityWalkingMiles * 20));
}

function createDirectionsUrl(
  originLat: number,
  originLng: number,
  destinationLat: number,
  destinationLng: number,
): string {
  const params = new URLSearchParams({
    api: '1',
    origin: `${originLat},${originLng}`,
    destination: `${destinationLat},${destinationLng}`,
    travelmode: 'walking',
  });

  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

const railStationsById = new Map(artsRailStations.map((station) => [station.id, station]));

export const artsVenues: ArtsVenue[] = baseVenues.map((venue) => {
  const railGuides = venue.railStationIds
    .map((stationId) => {
      const station = railStationsById.get(stationId);

      if (!station) {
        return undefined;
      }

      return {
        stationId,
        estimatedWalkMinutes: estimateWalkMinutes(station.lat, station.lng, venue.lat, venue.lng),
        directionsUrl: createDirectionsUrl(station.lat, station.lng, venue.lat, venue.lng),
        station,
      } satisfies RailGuide;
    })
    .filter((guide): guide is RailGuide => Boolean(guide))
    .sort((left, right) => left.estimatedWalkMinutes - right.estimatedWalkMinutes);

  return {
    ...venue,
    railGuides,
    primaryRailGuide: railGuides[0],
  } satisfies ArtsVenue;
});