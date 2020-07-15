# https://gist.github.com/epoch/13511edce9ddea94ca61#file-test-rb
# Queen Attack
# In the game of chess, a queen can attack pieces which are on the same row, column, or diagonal.

# A chessboard can be represented by an 8 by 8 array.

# Write a program that positions two queens on a chess board and indicates whether or not they are positioned so that they can attack each other.

# queens = Queens.new(:white => [2, 3], :black => [5, 6])
# queens.to_s
# # => "O O O O O O O O
#       O O O O O O O O
#       O O O W O O O O
#       O O O O O O O O
#       O O O O O O O O
#       O O O O O O B O
#       O O O O O O O O
#       O O O O O O O O"

# queens.attack?
# # => true

class Queens 
    def initialize(hash = {:white => [0,3], :black => [7,3] })
        if occupy_same_space(hash) 
            raise ArgumentError
        else
            @hash = hash
        end
    end    

    def white
        @hash[:white]
    end

    def black
        @hash[:black]
    end

    # def to_s
    #     str = ""
    #      8.times do
    #          8.times do |t|
    #             str += "O"
    #             if t != 7
    #                 str += "\s"
    #             end
    #          end
    #          str += "\n"
    #      end
    #      str[(@hash[:white][0] * (8 + 7)) + (@hash[:white][0] - 1) + (@hash[:white][1] * 2) + 1] = "W"
    #      str[(@hash[:black][0] * (8 + 7)) + (@hash[:black][0] - 1) + (@hash[:black][1] * 2) + 1] = "B"
    #     #  str[60] = "W"
    #      str
    #  end

    def create_board
        outer = []
        8.times do 
            outer.push(Array.new(8, "O"))
        end
        outer[@hash[:white][0]][@hash[:white][1]] = "W"
        outer[@hash[:black][0]][@hash[:black][1]] = "B"
        outer
    end

    def to_s
        str1 = ""
        create_board().each do |inner|
            str = ""
            inner.each_with_index do |char, index|
                str += char 
                if  index != (inner.length - 1)
                    str += "\s"
                end
            end
            str += "\n"
            str1 += str
        end
        str1.chomp
    end

    def attack?
        can_attack_on_same_row() ||
        can_attack_on_same_column() ||
        can_attack_on_diagonal() 
    end

    def can_attack_on_same_row()
        @hash[:white][0] == @hash[:black][0] 
    end

    def can_attack_on_same_column()
        @hash[:white][1] == @hash[:black][1] 
    end

    def occupy_same_space(hash)
        hash[:white] == hash[:black]
    end
    
    def can_attack_on_diagonal_top_left
        i = 0
        until ((@hash[:white][0] - i) < 0 || (@hash[:white][1] - i) < 0)
            if (@hash[:white][0] - i) == @hash[:black][0] && (@hash[:white][1] - i) == @hash[:black][1]
                return true
            end
            i += 1
        end
        return false
    end

    def can_attack_on_diagonal_top_right
        i = 0
        until ((@hash[:white][0] - i) < 0 || (@hash[:white][1] + i) > 7)
            if (@hash[:white][0] - i) == @hash[:black][0] && (@hash[:white][1] + i) == @hash[:black][1]
                return true
            end
            i += 1
        end
        return false
    end

    def can_attack_on_diagonal_bottom_left
        i = 0
        until ((@hash[:white][0] + i) > 7 || (@hash[:white][1] - i) < 0)
            if (@hash[:white][0] + i) == @hash[:black][0] && (@hash[:white][1] - i) == @hash[:black][1]
                return true
            end
            i += 1
        end
        return false
    end

    def can_attack_on_diagonal_bottom_right
        i = 0
        until ((@hash[:white][0] + i) > 7 || (@hash[:white][1] + i) > 7)
            if (@hash[:white][0] + i) == @hash[:black][0] && (@hash[:white][1] + i) == @hash[:black][1]
                return true
            end
            i += 1
        end
        return false
    end

    def can_attack_on_diagonal

        can_attack_on_diagonal_top_left() || 
        can_attack_on_diagonal_top_right() || 
        can_attack_on_diagonal_bottom_left() ||
        can_attack_on_diagonal_bottom_right() 

    end
    
end
queens1 = Queens.new()

p queens1.white
p queens1.black

queens2 = Queens.new(white: [3, 7], black: [6, 1])
p queens2.white
p queens2.black

queens3 = Queens.new(white: [2, 4], black: [6, 6])
queens3.to_s
puts "\n"

queens4 = Queens.new(white: [5, 3], black: [4, 5])
queens4.to_s
puts "\n"

queens5 = Queens.new(white: [1, 7], black: [3, 2])
queens5.to_s
puts "\n"

queens6 = Queens.new(white: [0, 7], black: [7, 0])
queens6.to_s
puts "\n"

queens7 = Queens.new(:white => [0, 3], :black => [7, 3])
p queens7.attack?

queens8 = Queens.new(:white => [7, 0], :black => [0, 7])
p "here " + queens8.attack?().to_s



