function swap_vector(vec_in, passes)
    no_swaps = 0 
    for vec_index in 1:(length(vec_in) - 1 - passes)
        if vec_in[vec_index] > vec_in[vec_index + 1]
            no_swaps += 1
            tmp = vec_in[vec_index]
            vec_in[vec_index] = vec_in[vec_index + 1]
            vec_in[vec_index + 1] = tmp 
        end 
    end 
    return no_swaps
end

function sort_julia(vec_in)
    passes = 0 
    while(true)
        no_swaps = swap_vector(vec_in, passes)
        if no_swaps == 0 
            break
        end 
        passes += 1
    end 
    return vec_in
end

n = 10000
repeat = 10

for index in [1:repeat]
    unsorted_vec = rand(Int32, n)
    println(@elapsed bla = sort_julia(unsorted_vec))
end