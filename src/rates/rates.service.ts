import { BadRequestException, Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import 'dotenv/config';

@Injectable()
export class RatesService {
  supabase: SupabaseClient<any, 'public', any>;

  constructor() {
    const supabaseUrl = 'https://vsohouvxxqqiocqqwbco.supabase.co';
    const supabaseKey = process.env.SUPABASE_KEY;

    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  async findAll() {
    const { data, error } = await this.supabase.from('currencies').select();

    if (error) throw new BadRequestException('Error');

    return data;
  }

  async findOne(symbol: string) {
    symbol = symbol.toLowerCase();

    const { data, error } = await this.supabase
      .from('currencies')
      .select()
      .eq('key', symbol)
      .single();

    if (error) throw new BadRequestException();

    return data;
  }
}
