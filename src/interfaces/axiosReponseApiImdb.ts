export interface IresponseTrailer{
    errorMessage?: string;
    expression: string
    results: [{
        description: string;
        id: string;
        image: string;
        resultType: string;
        title: string
    }];
    searchType: string;
} 