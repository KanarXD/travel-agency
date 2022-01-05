package edu.put.server.utility;

import edu.put.server.models.filters.Filter;
import org.springframework.data.jpa.domain.Specification;

import javax.validation.Validation;
import javax.validation.Validator;
import java.util.List;
import java.util.Map;

public class SpecificationResolver {

    private static final Validator validator = Validation.buildDefaultValidatorFactory().getValidator();

    public static <T> Specification<T> createSpecification(List<Filter> filterList, Map<String, String> paramMap) {
        Specification<T> specification = (root, query, criteriaBuilder) -> criteriaBuilder.conjunction();
        for (Filter filter : filterList) {
            filter.setValue(paramMap.get(filter.getField()));
            if (validator.validate(filter).isEmpty()) {
                specification = specification.and(createSpecification(filter));
            }
        }
        return specification;
    }

    private static <T> Specification<T> createSpecification(Filter filter) {
        return switch (filter.getQueryOperator()) {
            case GREATER_THAN -> (root, query, criteriaBuilder) ->
                    filter.getValue().matches("^[0-9]+$") ?
                            criteriaBuilder.greaterThanOrEqualTo(root.get(filter.getField()), filter.getValue()) :
                            criteriaBuilder.conjunction();
            case LESS_THAN -> (root, query, criteriaBuilder) ->
                    filter.getValue().matches("^[0-9]+$") ?
                            criteriaBuilder.lessThanOrEqualTo(root.get(filter.getField()), filter.getValue()) :
                            criteriaBuilder.conjunction();
            case ENDS_WITH -> (root, query, criteriaBuilder) -> criteriaBuilder.like(criteriaBuilder.lower(root.get(filter.getField())),
                    "%" + filter.getValue().toLowerCase());
            case STARTS_WITH -> (root, query, criteriaBuilder) -> criteriaBuilder.like(criteriaBuilder.lower(root.get(filter.getField())),
                    filter.getValue().toLowerCase() + "%");
            case LIKE -> (root, query, criteriaBuilder) -> criteriaBuilder.like(criteriaBuilder.lower(root.get(filter.getField())),
                    "%" + filter.getValue().toLowerCase() + "%");
        };
    }

    public static Validator getValidator() {
        return validator;
    }
}
