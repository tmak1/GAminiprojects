require 'minitest/autorun'
require 'minitest/reporters'

Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new()

require_relative 'leap_year'

# 1600 yes
# 1200 yes
# 1300 no
# 1500 no
# 1996 yes
# 2008 yes
# 1999 no
# 2001 no

class LeapTest < MiniTest::Test

  def test_years_divisible_by_400_are_leap_years
    # expected, actual
    assert_equal true, Year.new(1600).leap? 
    assert_equal true, Year.new(1200).leap?
    assert_equal true, Year.new(800).leap?    
    assert_equal true, Year.new(2000).leap?
  end

  def test_years_divisible_by_100_but_not_400_are_not_leap_years
    # skip
    assert_equal false, Year.new(1300).leap?
    assert_equal false, Year.new(1400).leap?
    assert_equal false, Year.new(1500).leap?
    assert_equal false, Year.new(1700).leap?
  end

  def test_years_divisible_by_4_but_not_100_are_leap_years
    # skip
    assert_equal true, Year.new(1996).leap?
    assert_equal true, Year.new(2004).leap?
    assert_equal true, Year.new(2008).leap?
    assert_equal true, Year.new(2012).leap?
  end

  def test_2000_is_leap_year
    # skip
    assert_equal true, Year.new(2000).leap?
  end

  def test_2001_is_not
    # skip
    assert_equal false, Year.new(2001).leap?
  end
end