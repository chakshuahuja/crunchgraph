USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM "file:///csv_export/clean/organizations_clean.csv" AS row
CREATE (:Organization {
company_name: row.company_name,
primary_role: row.primary_role,
permalink: row.permalink,
domain: row.domain,
homepage_url: row.homepage_url,
country_code: row.country_code,
region: row.region,
city: row.city,
short_description: row.short_description,
category_list: row.category_list,
funding_total_usd: row.funding_total_usd,
founded_on: row.founded_on,
closed_on: row.closed_on,
employee_count: row.employee_count,
facebook_url: row.facebook_url,
linkedin_url: row.linkedin_url,
cb_url: row.cb_url,
logo_url: row.logo_url,
profile_image_url: row.profile_image_url,
twitter_url: row.twitter_url,
uuid: row.uuid,
created_at: row.created_at,
updated_at: row.updated_at
})


USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM "file:///csv_export/clean/people_clean.csv" AS row
CREATE (:PersonTest {
first_name: row.first_name,
last_name: row.last_name,
country_code: row.country_code,
state_code: row.state_code,
city: row.city,
logo_url: row.logo_url,
profile_image_url: row.profile_image_url,
twitter_url: row.twitter_url,
facebook_url: row.facebook_url,
cb_url: row.cb_url,
primary_affiliation_organization: row.primary_affiliation_organization,
primary_affiliation_title: row.primary_affiliation_title,
primary_organization_uuid: row.primary_organization_uuid,
gender:row.gender,
uuid: row.uuid,
created_at: row.created_at,
updated_at: row.updated_at
})


USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM "file:///csv_export/clean/acquisitions_clean.csv" AS row
CREATE (:AcquisitionTest {
acquiree_name: row.acquiree_name,
acquirer_name: row.acquirer_name,
acquirer_uuid: row.acquirer_uuid,
acquiree_uuid: row.acquiree_uuid,
acquisition_type: row.acquisition_type,
acquired_on: row.acquired_on,
price_usd: row.price_usd
price_currency_code: row.price_currency_code,
acquisition_uuid: row.acquisition_uuid
created_at: row.created_at,
updated_at: row.updated_at
})

USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM "file:///csv_export/clean/competitors_clean.csv" AS row
CREATE (: Competitor {
entity_uuid: row.entity_uuid,
competitor_uuid: row.competitor_uuid,
created_at: row.created_at,
updated_at: row.updated_at
})


USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM "file:///csv_export/clean/ipos_clean.csv" AS row
CREATE (:IPO {
stock_exchange_symbol: row.stock_exchange_symbol,
stock_symbol: row.stock_symbol,
went_public_on: row.went_public_on,
price_usd: row.price_usd,
price: row.price,
price_currency_code: row.price_currency_code,
ipo_uuid: row.ipo_uuid,
company_uuid: row.company_uuid,
created_at: row.created_at,
updated_at: row.updated_at
})

USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM "file:///csv_export/clean/investment_partners_clean.csv" AS row
CREATE (:InvestmentPartners {
funding_round_uuid: row.funding_round_uuid,
investor_uuid: row.investor_uuid,
partner_uuid: row.partner_uuid
})

USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM "file:///csv_export/clean/investors_clean.csv" AS row
CREATE (:Investors {
uuid: row.uuid,
updated_at: row.updated_at,
domain: row.domain,
investor_type: row.investor_type,
investment_count: row.investment_count,
total_funding_usd: row.total_funding_usd
})

USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM "file:///csv_export/clean/org_parents_clean.csv" AS row
CREATE (:OrgParent {
org_uuid: row.org_uuid,
parent_org_uuid: row.parent_org_uuid,
relationship_to_parent: row.relationship_to_parent,
created_at: row.created_at,
updated_at: row.updated_at
})

USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM "file:///csv_export/clean/customers_clean.csv" AS row
CREATE (:Customers {
entity_uuid: row.entity_uuid,
customer_uuid: row.customer_uuid,
created_at: row.created_at,
updated_at: row.updated_at
})

USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM "file:///csv_export/clean/jobs_clean.csv" AS row
CREATE (:Jobs {
person_uuid: row.person_uuid,
org_uuid: row.org_uuid,
started_on: row.started_on,
ended_on: row.ended_on,
is_current: row.is_current,
title: row.title,
job_role: row.job_role,
executive_role: row.executive_role,
advisory_role: row.advisory_role
})

USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM "file:///csv_export/clean/awards_clean.csv" AS row
CREATE (:Awards {
type: row.type,
award_name: row.award_name,
award_uuid: row.award_uuid,
event_name: row.event_name,
event_uuid: row.event_uuid,
awardee_name: row.awardee_name,
awardee_uuid: row.awardee_uuid
})

USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM "file:///csv_export/clean/events_clean.csv" AS row
CREATE (:Events {
uuid: row.uuid,
name: row.name,
short_description: row.short_description,
started_on: row.started_on,
ended_on: row.ended_on,
registration_details: row.registration_details,
registration_url: row.registration_url,
start_time: row.start_time,
end_time: row.end_time,
venue_name: row.venue_name,
venue_address: row.venue_address,
location_uuid: row.location_uuid,
cost: row.cost,
description: row.description,
city: row.city,
region: row.region,
country_code: row.country_code,
continent: row.continent,
permalink: row.permalink,
cb_url: row.cb_url,
logo_url: row.logo_url,
profile_image_url: row.profile_image_url,
event_roles: row.event_roles,
created_at: row.created_at,
updated_at: row.updated_at
})


USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM "file:///csv_export/clean/investments_clean.csv" AS row
CREATE (:Investments {
funding_round_uuid: row.funding_round_uuid,
investor_uuid: row.investor_uuid,
is_lead_investor: row.is_lead_investor,
})

USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM "file:///csv_export/clean/category_groups_clean.csv" AS row
CREATE (:CategoryGroups {
uuid: row.uuid,
category_name: row.category_name,
category_group_list: row.category_group_list
})

USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM "file:///csv_export/clean/funding_rounds_clean.csv" AS row
CREATE (:FundingRounds {
company_category_list: row.company_category_list,
funding_round_type: row.funding_round_type,
funding_round_code: row.funding_round_code,
announced_on: row.announced_on,
raised_amount_usd: row.raised_amount_usd,
raised_amount: row.raised_amount,
raised_amount_currency_code: row.raised_amount_currency_code,
target_money_raised_usd: row.target_money_raised_usd,
target_money_raised: row.target_money_raised,
target_money_raised_currency_code: row.target_money_raised_currency_code,
post_money_valuation_usd: row.post_money_valuation_usd,
post_money_valuation: row.post_money_valuation,
post_money_currency_code: row.post_money_currency_code,
investor_count: row.investor_count,
investor_names: row.investor_names,
cb_url: row.cb_url,
company_uuid: row.company_uuid,
funding_round_uuid: row.funding_round_uuid,
created_at: row.created_at,
updated_at: row.updated_at
})

USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM "file:///csv_export/clean/people_descriptions_clean.csv" AS row
CREATE (:PeopleDescriptions {
uuid: row.uuid,
description: row.description
})

USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM "file:///csv_export/clean/funds_clean.csv" AS row
CREATE (:Funds {
entity_uuid: row.entity_uuid,
fund_uuid: row.fund_uuid,
fund_name: row.fund_name,
started_on: row.started_on,
announced_on: row.announced_on,
raised_amount: row.raised_amount,
raised_amount_currency_code: row.raised_amount_currency_code,
created_at: row.created_at,
updated_at: row.updated_at
})

USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM "file:///csv_export/clean/organization_descriptions_clean.csv" AS row
CREATE (:OrganizationDescriptions {
uuid: row.uuid,
description: row.description
})


USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM "file:///csv_export/clean/schools_clean.csv" AS row
CREATE (:Schools {
uuid: row.uuid,
name: row.name,
country_code: row.country_code,
state_code: row.state_code,
region: row.region,
city: row.city,
zipcode: row.zipcode,
address1: row.address1,
address2: row.address2,
description: row.description,
homepage_url: row.homepage_url,
twitter_url: row.twitter_url,
facebook_url: row.facebook_url,
founded_on: row.founded_on,
aliases: row.aliases,
contact: row.contact
})

Find competitors of a company:
MATCH p=(o: Organization {uuid:'1eb37109-3b93-01a9-177f-fee2cb1bfcdc'})-[r:COMPETITOR]->() RETURN p LIMIT 25

Find companies acquired by a company:
MATCH p=(o: Organization {uuid:'1eb37109-3b93-01a9-177f-fee2cb1bfcdc'})-[r:ACQUIRED]->() RETURN p LIMIT 25

Created realtionships for jobs:
USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM "file:///csv_export/clean/jobs_clean.csv" AS row
match (o: Organization {uuid: row.org_uuid})
with o,row as j
match (p: Person {uuid: j.person_uuid})
create (p)-[:WORKS { title: j.title,
                     started_on: j.started_on,
                     ended_on: j.ended_on,
                     job_role: j.job_role,
                     executive_role: j.executive_role,
                     advisory_role: j.advisory_role,
                     is_current: j.is_current}]->(o)
return count(*)


Setting description for people:
MATCH (pd:PeopleDescriptions)
with pd
merge (p: Person {uuid: pd.uuid})
set p.description=pd.description
return count(*)


Setting investment info of organization:
match (i: Investors)
with i
merge (o: Organization {uuid: i.uuid})
set o.total_investing_funding_usd=i.total_funding_usd,
    o.investment_count=i.investment_count,
    o.investment_domain=i.domain,
    o.investment_type=i.investment_type
return count(*)


