/**
 * =============================================================================
 *
 * ORCID (R) Open Source
 * http://orcid.org
 *
 * Copyright (c) 2012-2014 ORCID, Inc.
 * Licensed under an MIT-Style License (MIT)
 * http://orcid.org/open-source-license
 *
 * This copyright and license information (including a link to the full license)
 * shall be included in its entirety in all copies or substantial portion of
 * the software.
 *
 * =============================================================================
 */
//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, vJAXB 2.1.10 in JDK 6 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2012.08.10 at 03:28:22 PM BST 
//

package org.orcid.jaxb.model.message;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;
import java.io.Serializable;

/**
 * <p>
 * Java class for anonymous complex type.
 * <p/>
 * <p>
 * The following schema fragment specifies the expected content contained within
 * this class.
 * <p/>
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 */
@XmlType(name = "work-external-identifier-type")
@XmlEnum
public enum WorkExternalIdentifierType implements Serializable {

    // @formatter:off
    @XmlEnumValue("other-id") OTHER_ID("other-id"),
    @XmlEnumValue("asin") ASIN("asin"),
    @XmlEnumValue("asin-tld") ASIN_TLD("asin-tld"),
    @XmlEnumValue("arxiv") ARXIV("arxiv"),
    @XmlEnumValue("bibcode") BIBCODE("bibcode"),
    @XmlEnumValue("doi") DOI("doi"),
    @XmlEnumValue("eid") EID("eid"),
    @XmlEnumValue("isbn") ISBN("isbn"),
    @XmlEnumValue("issn") ISSN("issn"),
    @XmlEnumValue("jfm") JFM("jfm"), JSTOR("jstor"),
    @XmlEnumValue("lccn") LCCN("lccn"),
    @XmlEnumValue("mr") MR("mr"),
    @XmlEnumValue("oclc") OCLC("oclc"),
    @XmlEnumValue("ol") OL("ol"),
    @XmlEnumValue("osti") OSTI("osti"),
    @XmlEnumValue("pmc") PMC("pmc"),
    @XmlEnumValue("pmid") PMID("pmid"),
    @XmlEnumValue("rfc") RFC("rfc"),
    @XmlEnumValue("ssrn") SSRN("ssrn"),
    @XmlEnumValue("zbl") XBL("zbl"),
    // New types in 1.2_rc6
    @XmlEnumValue("agr") AGR("agr"), // Agricola
    @XmlEnumValue("cba") CBA("cba"), // Chinese Biological Abstracts
    @XmlEnumValue("cit") CIT("cit"), // CiteSeer
    @XmlEnumValue("ctx") CTX("ctx"), // CiteXplore submission
    @XmlEnumValue("ethos") ETHOS("ethos"), // EThOS Peristent ID
    @XmlEnumValue("handle") HANDLE("handle"),
    @XmlEnumValue("hir") HIR("hir"), // NHS Evidence
    @XmlEnumValue("pat") PAT("pat"), // Patent number prefixed with country code
    @XmlEnumValue("source-work-id") SOURCE_WORK_ID("source-work-id"),
    @XmlEnumValue("uri") URI("uri"),
    @XmlEnumValue("urn") URN("urn"),
    // New in 1.2_rc7
    @XmlEnumValue("wos") WOS("wos"); // Web of Science identifier
    // @formatter:on

    private final String value;

    WorkExternalIdentifierType(String value) {
        this.value = value;
    }

    public String value() {
        return value;
    }

    public static WorkExternalIdentifierType fromValue(String value) {
        for (WorkExternalIdentifierType wit : WorkExternalIdentifierType.values()) {
            if (wit.value.equals(value)) {
                return wit;
            }
        }
        throw new IllegalArgumentException(value);
    }

}
