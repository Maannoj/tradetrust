export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      companies: {
        Row: {
          id: string;
          gstin: string;
          name: string;
          company_type: string;
          sector: string | null;
          registered_address: string | null;
          country: string;
          website: string | null;
          status: string;
          verified_at: string | null;
          verified_by: string | null;
          metadata: Json;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          gstin: string;
          name: string;
          company_type: string;
          sector?: string | null;
          registered_address?: string | null;
          country?: string;
          website?: string | null;
          status?: string;
          verified_at?: string | null;
          verified_by?: string | null;
          metadata?: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          gstin?: string;
          name?: string;
          company_type?: string;
          sector?: string | null;
          registered_address?: string | null;
          country?: string;
          website?: string | null;
          status?: string;
          verified_at?: string | null;
          verified_by?: string | null;
          metadata?: Json;
          created_at?: string;
          updated_at?: string;
        };
      };
      claims: {
        Row: {
          id: string;
          claim_number: string;
          claimant_company_id: string;
          respondent_company_id: string;
          title: string;
          description: string;
          amount: string | null;
          currency: string;
          status: string;
          priority: string;
          verified: boolean;
          verified_at: string | null;
          created_by: string | null;
          reviewed_by: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          claim_number: string;
          claimant_company_id: string;
          respondent_company_id: string;
          title: string;
          description: string;
          amount?: string | null;
          currency?: string;
          status?: string;
          priority?: string;
          verified?: boolean;
          verified_at?: string | null;
          created_by?: string | null;
          reviewed_by?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          claim_number?: string;
          claimant_company_id?: string;
          respondent_company_id?: string;
          title?: string;
          description?: string;
          amount?: string | null;
          currency?: string;
          status?: string;
          priority?: string;
          verified?: boolean;
          verified_at?: string | null;
          created_by?: string | null;
          reviewed_by?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      claim_documents: {
        Row: {
          id: string;
          claim_id: string;
          uploaded_by: string | null;
          document_type: string;
          storage_path: string;
          file_name: string;
          file_size: number | null;
          file_mime: string | null;
          uploaded_at: string;
          metadata: Json;
        };
        Insert: {
          id?: string;
          claim_id: string;
          uploaded_by?: string | null;
          document_type: string;
          storage_path: string;
          file_name: string;
          file_size?: number | null;
          file_mime?: string | null;
          uploaded_at?: string;
          metadata?: Json;
        };
        Update: {
          id?: string;
          claim_id?: string;
          uploaded_by?: string | null;
          document_type?: string;
          storage_path?: string;
          file_name?: string;
          file_size?: number | null;
          file_mime?: string | null;
          uploaded_at?: string;
          metadata?: Json;
        };
      };
      claim_responses: {
        Row: {
          id: string;
          claim_id: string;
          responder_company_id: string;
          responder_user_id: string | null;
          response_type: string;
          message: string;
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          claim_id: string;
          responder_company_id: string;
          responder_user_id?: string | null;
          response_type: string;
          message: string;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          claim_id?: string;
          responder_company_id?: string;
          responder_user_id?: string | null;
          response_type?: string;
          message?: string;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      claim_response_documents: {
        Row: {
          id: string;
          claim_response_id: string;
          uploaded_by: string | null;
          storage_path: string;
          file_name: string;
          file_size: number | null;
          file_mime: string | null;
          uploaded_at: string;
          metadata: Json;
        };
        Insert: {
          id?: string;
          claim_response_id: string;
          uploaded_by?: string | null;
          storage_path: string;
          file_name: string;
          file_size?: number | null;
          file_mime?: string | null;
          uploaded_at?: string;
          metadata?: Json;
        };
        Update: {
          id?: string;
          claim_response_id?: string;
          uploaded_by?: string | null;
          storage_path?: string;
          file_name?: string;
          file_size?: number | null;
          file_mime?: string | null;
          uploaded_at?: string;
          metadata?: Json;
        };
      };
      claim_events: {
        Row: {
          id: string;
          claim_id: string;
          actor_user_id: string | null;
          actor_company_id: string | null;
          event_type: string;
          event_payload: Json;
          created_at: string;
        };
        Insert: {
          id?: string;
          claim_id: string;
          actor_user_id?: string | null;
          actor_company_id?: string | null;
          event_type: string;
          event_payload?: Json;
          created_at?: string;
        };
        Update: {
          id?: string;
          claim_id?: string;
          actor_user_id?: string | null;
          actor_company_id?: string | null;
          event_type?: string;
          event_payload?: Json;
          created_at?: string;
        };
      };
      trade_scores: {
        Row: {
          id: string;
          company_id: string;
          score: string;
          category: string;
          source: string;
          calculated_at: string;
          verified: boolean;
          created_by: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          company_id: string;
          score: string;
          category: string;
          source?: string;
          calculated_at?: string;
          verified?: boolean;
          created_by?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          company_id?: string;
          score?: string;
          category?: string;
          source?: string;
          calculated_at?: string;
          verified?: boolean;
          created_by?: string | null;
          created_at?: string;
        };
      };
      trade_score_components: {
        Row: {
          id: string;
          trade_score_id: string;
          metric: string;
          value: string;
          weight: string;
          verified: boolean;
          verified_at: string | null;
          details: Json;
        };
        Insert: {
          id?: string;
          trade_score_id: string;
          metric: string;
          value: string;
          weight: string;
          verified?: boolean;
          verified_at?: string | null;
          details?: Json;
        };
        Update: {
          id?: string;
          trade_score_id?: string;
          metric?: string;
          value?: string;
          weight?: string;
          verified?: boolean;
          verified_at?: string | null;
          details?: Json;
        };
      };
      company_risk_signals: {
        Row: {
          id: string;
          company_id: string;
          signal_type: string;
          signal_value: string | null;
          signal_source: string | null;
          signal_date: string;
          metadata: Json;
        };
        Insert: {
          id?: string;
          company_id: string;
          signal_type: string;
          signal_value?: string | null;
          signal_source?: string | null;
          signal_date?: string;
          metadata?: Json;
        };
        Update: {
          id?: string;
          company_id?: string;
          signal_type?: string;
          signal_value?: string | null;
          signal_source?: string | null;
          signal_date?: string;
          metadata?: Json;
        };
      };
    };
    Views: Record<string, { Row: Record<string, Json> }>;
    Functions: Record<string, { Args: Record<string, Json>; Returns: Json }>;
    Enums: Record<string, string>;
  };
}
