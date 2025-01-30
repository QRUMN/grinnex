const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
const MAPBOX_API = 'https://api.mapbox.com/geocoding/v5/mapbox.places';

export interface AddressComponent {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface MapboxFeature {
  id: string;
  place_name: string;
  center: [number, number];
  context: Array<{
    id: string;
    text: string;
    short_code?: string;
  }>;
  properties: {
    address?: string;
  };
  text: string;
}

export interface MapboxResponse {
  features: MapboxFeature[];
}

export interface AddressSuggestion {
  fullAddress: string;
  components: AddressComponent;
}

const parseAddress = (feature: MapboxFeature): AddressComponent => {
  const components: AddressComponent = {
    street: '',
    city: '',
    state: '',
    zipCode: ''
  };

  // Get street address
  components.street = feature.properties.address 
    ? `${feature.properties.address} ${feature.text}`
    : feature.text;

  // Parse city, state, and zip from context
  feature.context?.forEach(ctx => {
    if (ctx.id.startsWith('place')) {
      components.city = ctx.text;
    } else if (ctx.id.startsWith('region')) {
      components.state = ctx.short_code?.replace('US-', '') || ctx.text;
    } else if (ctx.id.startsWith('postcode')) {
      components.zipCode = ctx.text;
    }
  });

  return components;
};

export const searchAddress = async (query: string): Promise<AddressSuggestion[]> => {
  if (!query) return [];

  try {
    const response = await fetch(
      `${MAPBOX_API}/${encodeURIComponent(query)}.json?access_token=${MAPBOX_TOKEN}&country=US&types=address&limit=5`
    );

    if (!response.ok) {
      throw new Error('Mapbox API request failed');
    }

    const data: MapboxResponse = await response.json();
    
    // Parse and return address suggestions with components
    return data.features.map(feature => ({
      fullAddress: feature.place_name,
      components: parseAddress(feature)
    }));
  } catch (error) {
    console.error('Error fetching address suggestions:', error);
    return [];
  }
};
