/*
  # Create card gallery table

  1. New Tables
    - `card_gallery`
      - `id` (uuid, primary key)
      - `image_url` (text, not null) - URL of the card image
      - `holder_name` (text, not null) - Name displayed on the card
      - `created_at` (timestamptz, default now)
      - `user_id` (uuid, references auth.users) - Link to the user who created the card

  2. Security
    - Enable RLS on `card_gallery` table
    - Add policies for:
      - Anyone can view cards
      - Authenticated users can create cards
      - Users can only delete their own cards
*/

CREATE TABLE IF NOT EXISTS card_gallery (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url text NOT NULL,
  holder_name text NOT NULL,
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users NOT NULL
);

ALTER TABLE card_gallery ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view cards
CREATE POLICY "Cards are viewable by everyone" 
  ON card_gallery
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to insert their own cards
CREATE POLICY "Users can add their own cards" 
  ON card_gallery
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Allow users to delete their own cards
CREATE POLICY "Users can delete their own cards" 
  ON card_gallery
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);