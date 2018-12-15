import { isType, setType } from './utils/properties';

// Imported Abstracts
import { Provider } from './providers/abstract-provider';

// Imported Types
import { TypedData } from '@dicether/eip712';
import { Arrayish } from './utils/bytes';
import { TransactionRequest, TransactionResponse } from './providers/abstract-provider';


// Exported Types
export { TypedData };

export abstract class Signer {
    readonly provider?: Provider;

    abstract getAddress(): Promise<string>

    abstract signMessage(message: Arrayish | string): Promise<string>;
    abstract signTypedData(typedData: TypedData): Promise<string>;
    abstract sendTransaction(transaction: TransactionRequest): Promise<TransactionResponse>;

    constructor() {
        setType(this, 'Signer');
    }

    static isSigner(value: any): value is Signer {
        return isType(value, 'Signer');
    }

//    readonly inherits: (child: any) => void;
}

//defineReadOnly(Signer, 'inherits', inheritable(Signer));

