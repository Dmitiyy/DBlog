import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'transformPlatforms'})
export class TransformPlatforms implements PipeTransform{
  transform(value: string) {
    const platformsData: string[] = value.split(',');
    let transformedData: string[] = [...platformsData];
    
    if (platformsData.length > 3) {transformedData = transformedData.slice(0, 3)};
    return transformedData;
  }
}