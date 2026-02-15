/**
 * Pokemon类型声明文件
 * 定义Pokemon数据结构和相关类型
 */

/**
 * Pokemon类型信息
 */
export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

/**
 * Pokemon精灵图信息
 */
export interface PokemonSprites {
  front_default: string | null;
  front_shiny: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  back_shiny_female: string | null;
  other: {
    'official-artwork': {
      front_default: string | null;
      front_shiny: string | null;
    };
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
  };
  versions: Record<string, Record<string, any>>;
}

/**
 * Pokemon数据结构
 */
export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Array<{
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }>;
  forms: Array<{
    name: string;
    url: string;
  }>;
  game_indices: Array<{
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }>;
  held_items: Array<any>;
  location_area_encounters: string;
  moves: Array<{
    move: {
      name: string;
      url: string;
    };
    version_group_details: Array<any>;
  }>;
  species: {
    name: string;
    url: string;
  };
  sprites: PokemonSprites;
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }>;
  types: PokemonType[];
}

/**
 * usePokemon返回值类型
 */
export interface UsePokemonReturn {
  data: Pokemon | null;
  loading: boolean;
  error: string | null;
}

/**
 * Pokemon API响应类型
 */
export type PokemonResponse = Pokemon;
