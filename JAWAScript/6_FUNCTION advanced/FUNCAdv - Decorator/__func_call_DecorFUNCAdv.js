/* JawaScript - __func_call_DecorFUNCAdv.    Передача контекста с пом. func.call(this, x)


func.call(context, arg[0], arg[1], ...):

wrap(...args){
    hash(args)                      - масив args
    func.call(this, ...args)        - список аргументів (перебираємий Obj args)
}

                    wrap(){                             (- ЗАСТАРІЛЕ ЗАСТОСУВАННЯ: arguments - псевдомасив)
                        hash(arguments)                 - псевдомассив
                        func.call(this, ...arguments)   - список аргументів
                    }




func.apply(context, args);

wrap(...args){
    hash(args)                      - масив args
    func.apply(this, args)          - масив args
}

                    wrap(){                             (- ЗАСТАРІЛЕ ЗАСТОСУВАННЯ: arguments - псевдомасив)
                        hash(arguments)                 - псевдомассив
                        func.apply(this, arguments)     - псевдомассив
                    }


*/
'use strict';

alert("Start __func_call_DecorFUNCAdv");






alert("End");