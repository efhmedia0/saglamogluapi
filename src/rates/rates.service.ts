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

  private formatSymbol(symbol: string) {
    if (symbol === 'usd') symbol = 'usd-try';
    if (symbol === 'eur') symbol = 'eur-try';
    if (symbol === 'gbp') symbol = 'gbp-try';
    if (symbol === 'chf') symbol = 'chf-try';
    if (symbol === 'jpy') symbol = 'jpy-try';
    if (symbol === 'cad') symbol = 'cad-try';
    if (symbol === 'aud') symbol = 'aud-try';
    if (symbol === 'sar') symbol = 'sar-try';
    if (symbol === 'grm') symbol = 'has-altin';
    if (symbol === 'gr') symbol = '1-gr-kulplu-22';
    if (symbol === 'h22') symbol = '1-gr-kulplu-22';
    if (symbol === 'has') symbol = 'has-altin';
    if (symbol === 'h18') symbol = '18-ayar';
    if (symbol === 'h14') symbol = '14-ayar';

    return symbol
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
      .eq('key', this.formatSymbol(symbol))
      .single();

    if (error) throw new BadRequestException();

    return data;
  }
}
