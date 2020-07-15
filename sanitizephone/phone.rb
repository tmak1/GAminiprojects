class Phone 
    def initialize(number)
        @isValid = false
        @number = number
    end

    def number
        arr = @number.split("").select do |digit|
            digit.to_i.to_s == digit
        end
        str = ""
        10.times do 
            str = str + "0"
        end
        arr = arr.join()
        if arr.length < 10
            return str
        elsif arr.length > 11
            return str
        elsif arr.length < 11 # meaning if its 10 digits
            @isValid = true
            @number = arr
            return arr
        elsif (arr[0] == "1") # meaning if its 11 digits beginning with 1
            arr = arr[1..-1]
            @isValid = true
            @number = arr
            return arr
        else
            return str
        end
    end

    def area_code 
        number()
        if @isValid
            return @number[0..2]
        end
    end

    def to_s
        number()
        if @isValid
            return "(#{@number[0..2]}) #{@number[3..5]}-#{@number[6..-1]}"
        end
    end
end