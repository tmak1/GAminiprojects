# https://gist.github.com/tmak1/a65bf75aebfb08b2509f6ee4b07325fd

# Scrabble Score
# Write a program that, given a word, computes the scrabble score for that word.

# Scrabble.new("cabbage").score
# # => 14
# Scrabble.new('quirky').score
# # => 22
# Your program should be in a file named scrabble.rb.

# Letter Values
# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10
# requirements
# should work with upper case and lower case words
# empty string should return a score of zero
# spaces should be ignored
# Write 5 tests for scrabble in a file named scrabble_test.rb

class Scrabble

    def initialize(word)    
        @score = 0
        @word = word      
    end

    def score
        unless @word.is_a? String
            return @score
        else 
            if @word.gsub(/[^a-zA-Z]/, '').length == 0
                return @score
            else
                words = @word.gsub(/[^a-zA-Z]/, '').upcase
                words.split("").each do |char| 
                    if ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"].include? char 
                        @score += 1
                    elsif ["D", "G"].include? char
                        @score += 2 
                    elsif ["B", "C", "M", "P"].include? char
                        @score += 3 
                    elsif ["F", "H", "V", "W", "Y"].include? char
                        @score += 4 
                    elsif ["K"].include? char
                        @score += 5
                    elsif ["J", "X"].include? char
                        @score += 8
                    elsif ["Q", "Z"].include? char
                        @score += 10 
                    end
                end 
            end
        end
        return @score
    end
end