def valid_pin?(input)
    if input.length != 4
        return false
    elsif (input.to_i.to_s != input && input.to_f.to_s != input)
        return false
    elsif input.split("").uniq.length <= 1
        return false
    else 
        return true
    end
end