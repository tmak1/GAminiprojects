# https://gist.github.com/epoch/ab1dcb06394621b883d7

require 'minitest/autorun'
require "minitest/reporters" # optional
Minitest::Reporters.use!(Minitest::Reporters::SpecReporter.new) # optional

require_relative 'scrabble'

class ScrabbleTest < MiniTest::Test

  def test_empty_string
    score = Scrabble.new("").score
    assert_equal 0, score
  end
  
  def test_not_string_input
    score = Scrabble.new(122).score
    assert_equal 0, score
  end

  def test_space_removal
    score = Scrabble.new("   scr  a  bbl  e   ").score
    assert_equal 14, score
  end

  def test_upper_or_lower_case
    score = Scrabble.new("ScRabBlE").score
    assert_equal 14, score
  end

  def test_nonletter_removal
    score = Scrabble.new("Sc#Ra$bB1234lE").score
    assert_equal 14, score
  end

end