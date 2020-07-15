require 'minitest/autorun'
require 'minitest/reporters'

Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new()

require_relative 'valid_pin'

class ValidPinTest < MiniTest::Test

  def test_pin_with_numbers
    actual = valid_pin?('1234')
    expected = true
    assert_equal expected, actual
  end

  def test_pin_with_three_digit
    
    assert_equal false, valid_pin?('123')
  end

  def test_pin_with_letter
    assert_equal false, valid_pin?('123A')
  end  

  def test_pin_with_letters
    assert_equal false, valid_pin?('A1234A')
  end

  def test_pin_with_four_same_number
    assert_equal false, valid_pin?('1111')
  end

  def test_empty_string
    assert_equal false, valid_pin?('')
  end
end