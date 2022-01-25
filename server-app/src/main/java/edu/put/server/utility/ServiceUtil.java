package edu.put.server.utility;

import edu.put.server.models.ResponseData;
import edu.put.server.models.filters.Filter;
import edu.put.server.models.filters.PageFilter;
import edu.put.server.repositories.RepositoryBase;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;
import java.util.Map;

public class ServiceUtil {

    public static <T> ResponseData<List<T>> getResponseData(RepositoryBase<T> repositoryBase, PageFilter pageFilter, Map<String, String> paramMap, List<Filter> filterList) {
        Specification<T> specification = SpecificationResolver.createSpecification(filterList, paramMap);
        List<T> itemList = SpecificationResolver.getValidator().validate(pageFilter).isEmpty() ?
                repositoryBase.findAll(specification, PageRequest.of(pageFilter.getCurrentPage(), pageFilter.getItemsPerPage())).toList() :
                repositoryBase.findAll(specification);
        return ResponseData.<List<T>>builder().data(itemList).total(repositoryBase.count()).build();
    }

}
