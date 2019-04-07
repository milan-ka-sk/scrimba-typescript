// if we dont know what type of argument will be passed

function example<T>(arg: T[]): T {
    
    return arg[0];
}

example([5]);